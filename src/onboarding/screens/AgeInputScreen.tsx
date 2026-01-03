import { useRouter } from "expo-router";
import { useState } from "react";
import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../shared/components/CustomButton";
import KeyboardWrapper from "../../shared/components/KeyboardWrapper";
import { colors } from "../../shared/constants/colors";
import { fonts } from "../../shared/constants/fonts";

export default function AgeInputScreen() {
  const router = useRouter();
  const forwardPath = "/";
  const [age, setAge] = useState("");

  function inputHandler(enteredAge: string){
    setAge(enteredAge);
  }

  function continueButtonHandler() {
    Keyboard.dismiss();
    router.push(forwardPath);
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.title}>What is your age?</Text>
          <Text style={styles.description}>
            As per regulations, cab sharing is allowed only people above the age of 13.
          </Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Your Age"
            keyboardType="number-pad"
            onChangeText={inputHandler}
            value={age}
            maxLength={2}
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
    marginTop: 50,
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
