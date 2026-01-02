import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../ui/CustomButton";
import CountdownTimer from "./CountdownTimer";
import KeyboardWrapper from "./KeyboardWrapper";

export default function OtpInputForm() {
  const { phoneNumber } = useLocalSearchParams<{ phoneNumber: string }>();
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Enter your code</Text>
        <View style={styles.description}>
          <Text>Sent to </Text>
          <Text>+91 {phoneNumber}. </Text> <Text>{<CountdownTimer />}</Text>
        </View>
      </View>
      <View style={styles.otpInputWrapper}>
        <TextInput style={styles.otpInput} placeholder="Enter otp" />
      </View>
      <KeyboardWrapper style={styles.footer}>
        <CustomButton background="#3475DE" text="#FFFFFF" onPress={() => {}}>
          Continue
        </CustomButton>
      </KeyboardWrapper>
    </View>
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
    fontSize: 24,
    fontWeight: "500",
  },
  description: {
    flexDirection: 'row'
  },
  otpInputWrapper: {
    borderColor: 'black',
    borderWidth: 2,
    marginHorizontal: 8,
    height: 62,
    marginTop: 32
  },
  otpInput: {},
  footer: {
    position: "absolute",
    bottom: 0,
    width: "95%",
    marginHorizontal: 12,
    gap: 12,
    paddingBottom: 20,
  },
});
