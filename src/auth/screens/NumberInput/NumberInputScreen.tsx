import { Paths } from "@/src/shared/constants/paths";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Keyboard, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../shared/components/CustomButton";
import KeyboardWrapper from "../../../shared/components/KeyboardWrapper";
import { colors } from "../../../shared/constants/colors";
import { images } from "../../../shared/constants/images";
import { styles } from "./NumberInput.styles";

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
      pathname: Paths.OTP,
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
            <Image source={images.flag} />
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
            <View>
              <CustomButton
                title="Continue"
                background={colors.primary}
                style={styles.buttonText}
                onPress={continueButtonHandler}
              />
            </View>
          </View>
        </KeyboardWrapper>
      </View>
    </SafeAreaView>
  );
}
