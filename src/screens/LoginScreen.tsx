import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import KeyboardWrapper from "../components/auth/KeyboardWrapper";
import CustomButton from "../components/ui/CustomButton";
import { colors } from "../constants/colors";
import { fonts } from "../constants/fonts";

export default function LoginScreen() {
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState("");

  function inputHandler(enteredNumber: string) {
    setPhoneNumber(enteredNumber);
  }

  function continueButtonHandler() {
    Keyboard.dismiss();
    if (phoneNumber.length !== 10) return;
    router.push({
      pathname: "/auth/otp",
      params: {
        phoneNumber: phoneNumber,
      },
    });
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.title}>What is your number?</Text>
          <Text style={styles.description}>
            We&apos;ll send your a verification code
          </Text>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.countryCode}>
            <Image source={require("../../assets/project/images/flag.png")} />
            <Text style={styles.code}>+91</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
              onChangeText={inputHandler}
              value={phoneNumber}
              maxLength={10}
            />
          </View>
        </View>
        <KeyboardWrapper>
          <View style={styles.footer}>
            <View style={styles.lineContainer}>
              <Text style={[styles.lineText, { opacity: 0.4 }]}>
                By tapping continue, you are agreeing to our
              </Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <Text style={[styles.lineText, { opacity: 0.6 }]}>
                  Terms of Service
                </Text>
                <Text style={[styles.lineText, { opacity: 0.4 }]}> and </Text>
                <Text style={[styles.lineText, { opacity: 0.6 }]}>
                  Privacy Policy
                </Text>
              </View>
            </View>
            <View style={styles.button}>
              <CustomButton
                background={colors.primary}
                text={colors.secondary}
                onPress={continueButtonHandler}
              >
                Continue
              </CustomButton>
            </View>
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
  description: {
    fontFamily: fonts.regular_400,
    fontSize: 16,
    fontWeight: 400,
    opacity: 0.4,
    marginHorizontal: 2,
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 57,
    marginTop: 32,
    marginHorizontal: 16,
  },
  countryCode: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    backgroundColor: colors.secondary,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginVertical: 2,
  },
  code: {
    fontFamily: fonts.regular_400,
    fontSize: 16,
    fontWeight: 400,
    marginLeft: 3,
  },
  inputContainer: {
    justifyContent: "center",
    backgroundColor: colors.secondary,
    borderRadius: 12,
    width: "76%",
    marginVertical: 2,
    marginHorizontal: 12,
  },
  input: {
    fontFamily: fonts.regular_400,
    fontSize: 16,
    paddingLeft: 16,
    paddingVertical: 12,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "95%",
    marginHorizontal: 12,
    gap: 12,
    paddingBottom: 20,
  },
  lineContainer: {
    alignItems: "center",
  },
  lineText: {
    fontFamily: fonts.regular_400,
    fontSize: 14,
    fontWeight: "400",
    color: "black",
  },
  button: {},
});
