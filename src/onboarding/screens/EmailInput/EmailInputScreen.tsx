import CustomButton from "@/src/shared/components/CustomButton";
import KeyboardWrapper from "@/src/shared/components/KeyboardWrapper";
import { colors } from "@/src/shared/constants/colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Keyboard, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./EmailInput.style";

export default function EmailScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = () => {
    if (email.length > 0) {
      setIsValidEmail(emailRegex.test(email));
    }
  };

  function inputHandler(enteredEmail: string) {
    setEmail(enteredEmail);
  }

  function continueButtonHandler() {
    Keyboard.dismiss();
    if (!isValidEmail) return;
    router.push({
      pathname: "/otp",
      params: {
        email: email,
      },
    });
  }
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.title}>What is your email?</Text>
          <Text style={styles.description}>
            We&apos;ll send your a verification code
          </Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter email address"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={inputHandler}
            onBlur={validateEmail}
            value={email}
          />
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
