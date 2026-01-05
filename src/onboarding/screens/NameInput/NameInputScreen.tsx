import { useRouter } from "expo-router";
import { useState } from "react";
import { Keyboard, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../shared/components/CustomButton";
import KeyboardWrapper from "../../../shared/components/KeyboardWrapper";
import { colors } from "../../../shared/constants/colors";
import { styles } from "./NameInput.styles";

export default function NameInputScreen() {
  const router = useRouter();
  const forwardPath = "/age";
  const [name, setName] = useState("");

  function inputHandler(enteredName: string){
    setName(enteredName);
  }

  function continueButtonHandler() {
    Keyboard.dismiss();
    router.push(forwardPath);
  }
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.title}>What is your name?</Text>
          <Text style={styles.description}>
            What do you want your fellow co-passengers to see and call you as 
          </Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            keyboardType="default"
            autoCapitalize="none"
            onChangeText={inputHandler}
            value={name}
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

