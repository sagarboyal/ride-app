import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import CustomButton from "../../shared/components/CustomButton";
import KeyboardWrapper from "../../shared/components/KeyboardWrapper";
import { colors } from "../../shared/constants/colors";
import { fonts } from "../../shared/constants/fonts";
import CountdownTimer from "../components/CountdownTimer";
import OtpInput from "../components/OtpInput";

export default function OtpScreen() {
  const router = useRouter();
  const [otpValue, setOtpValue] = useState("");
  const { phoneNumber, email } = useLocalSearchParams<{
    phoneNumber?: string;
    email?: string;
  }>();
  const forwardPath = phoneNumber ? "/email" : "/name";

  const handleOtpComplete = (otp: string) => {
    setOtpValue(otp);
  };

  const validateOtp = async () => {
    if (otpValue === "111111") {
      router.push(forwardPath);
    } else {
      Toast.show({
        type: "invalidOtpError",
        text1: "Invalid OTP !!",
        position: 'top',
        topOffset: 60
      });
    }
  };

  function continueButtonHandler() {
    validateOtp();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.title}>Enter your code</Text>
          <View style={styles.descriptionWrapper}>
            <Text style={[styles.description, { opacity: 0.4 }]}>Sent to </Text>
            <Text style={[styles.description, { opacity: 0.6 }]}>
              {phoneNumber ? `+91 ${phoneNumber}` : email}.{" "}
            </Text>
            {phoneNumber && (
              <Text style={[styles.description, , { opacity: 0.4 }]}>
                Resend OTP in{" "}
                {<CountdownTimer duration={30} style={styles.description} />}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.otpInputWrapper}>
          <View style={styles.otpInput}>
            <OtpInput onComplete={handleOtpComplete} />
          </View>
        </View>
        <KeyboardWrapper>
          <View style={styles.footer}>
            <CustomButton
              background={colors.primary}
              text={colors.secondary}
              onPress={continueButtonHandler}
            >
              Continue
            </CustomButton>
          </View>
        </KeyboardWrapper>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    height: 57,
    marginTop: 80,
    marginHorizontal: 30,
    gap: 6,
  },
  title: {
    fontFamily: fonts.medium_500,
    fontSize: 24,
    fontWeight: "500",
  },
  descriptionWrapper: {
    flexDirection: "row",
  },
  description: {
    fontFamily: fonts.regular_400,
    fontSize: 16,
    fontWeight: 400,
  },
  otpInputWrapper: {
    marginHorizontal: 20,
    height: 62,
    marginTop: 32,
  },
  otpInput: {
    marginHorizontal: 6,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "95%",
    marginHorizontal: 12,
    gap: 12,
    paddingBottom: 20,
  },
});
