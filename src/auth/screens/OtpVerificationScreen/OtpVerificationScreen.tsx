import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import CustomButton from "../../../shared/components/CustomButton";
import KeyboardWrapper from "../../../shared/components/KeyboardWrapper";
import { colors } from "../../../shared/constants/colors";
import CountdownTimer from "../../components/CountdownTimer";
import OtpInput from "../../components/OtpInput";
import { styles } from "./OtpVerification.styles";

export default function OtpScreen() {
  const router = useRouter();
  const [otpValue, setOtpValue] = useState("");
  const { phoneNumber, email } = useLocalSearchParams<{
    phoneNumber?: string;
    email?: string;
  }>();
  const forwardPath = phoneNumber ? "/email" : "/name";

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
            <OtpInput onComplete={setOtpValue} />
          </View>
        </View>
        <KeyboardWrapper>
          <View style={styles.footer}>
            <CustomButton
              title="Continue"
              background={colors.primary}
              style={styles.buttonText}
              onPress={continueButtonHandler}
            />
          </View>
        </KeyboardWrapper>
      </View>
    </SafeAreaView>
  );
}


