import { useRouter } from "expo-router";
import { useState } from "react";
import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import KeyboardWrapper from "../components/auth/KeyboardWrapper";
import CustomButton from "../components/ui/CustomButton";
import { colors } from "../constants/colors";
import { fonts } from "../constants/fonts";

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

  function inputHandler(enteredEmail: string){
    setEmail(enteredEmail);
  }

  function continueButtonHandler() {
    Keyboard.dismiss();
    if(!isValidEmail) return;
    router.push({
      pathname: "/auth/otp",
      params: {
        email: email,
      },
    });
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
  description: {
    fontFamily: fonts.regular_400,
    fontSize: 16,
    fontWeight: 400,
    opacity: 0.4,
    marginHorizontal: 2,
  },
  inputWrapper: {
    height: 57,
    marginTop: 32,
    marginHorizontal: 12,
  },
  input: {
    fontFamily: fonts.regular_400,
    fontSize: 16,
    fontWeight: 400,
    opacity: 0.5,
    backgroundColor: colors.secondary,
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 10,
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
