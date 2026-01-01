import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import CustomButton from "../ui/CustomButton";
import KeyboardWrapper from "./KeyboardWrapper";

export default function PhoneForm() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.title}>What is your number?</Text>
        <Text style={styles.description}>
          We&apos;ll send your a verification code
        </Text>
      </View>
      <View style={styles.box2}>
        <View style={styles.countryCode}>
          <Image source={require("../../assets/project/images/flag.png")} />
          <Text style={styles.code}>+91</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <KeyboardWrapper>
        <View style={styles.box3}>
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
              background="#3475DE"
              text="#FFFFFF"
              onPress={() => {}}
            >
              Continue
            </CustomButton>
          </View>
        </View>
      </KeyboardWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
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
    fontSize: 16,
    fontWeight: 400,
    opacity: 0.4,
    marginHorizontal: 2,
  },
  box2: {
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
    backgroundColor: "#E6E8EB",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginVertical: 2,
  },
  code: {
    fontSize: 16,
    fontWeight: 400,
    marginLeft: 3,
  },
  inputContainer: {
    justifyContent: "center",
    backgroundColor: "#E6E8EB",
    borderRadius: 12,
    width: "76%",
    marginVertical: 2,
    marginHorizontal: 12,
  },
  input: {
    fontSize: 16,
    paddingLeft: 16,
    paddingVertical: 12,
  },
  box3: {
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
    fontSize: 14,
    fontWeight: "400",
    color: "#000000",
  },
  button: {},
});
