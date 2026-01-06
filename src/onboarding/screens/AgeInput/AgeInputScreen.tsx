import CustomButton from "@/src/shared/components/CustomButton";
import KeyboardWrapper from "@/src/shared/components/KeyboardWrapper";
import { colors } from "@/src/shared/constants/colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Keyboard, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./AgeInput.styles";

export default function AgeInputScreen() {
  const router = useRouter();
  const forwardPath = "/add";
  const [age, setAge] = useState("");

  function inputHandler(enteredAge: string) {
    setAge(enteredAge);
  }

  function continueButtonHandler() {
    Keyboard.dismiss();
    router.push(forwardPath);
  }
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.title}>What is your age?</Text>
          <Text style={styles.description}>
            As per regulations, cab sharing is allowed only people above the age
            of 13.
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
