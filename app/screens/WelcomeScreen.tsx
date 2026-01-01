import CustomButton from "@/components/ui/CustomButton";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/project/images/ellipse.png")}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hatch App</Text>
        <Text style={styles.subtitle}>Match and Pool for Trips</Text>
      </View>
      <View style={styles.buttomContainer}>
        <View style={styles.bodyImageContanier}>
          <Image
            style={styles.bodyImage1}
            source={require("../../assets/project/images/car.png")}
          />
          <Image
            style={styles.bodyImage2}
            source={require("../../assets/project/images/moon.png")}
          />
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            background="#3475DE"
            text="white"
            onPress={() => router.push("/auth/register")}
          >
            Create Account
          </CustomButton>
          <CustomButton
            background="#E6E8EB"
            text="black"
            onPress={() => router.push("/auth/login")}
          >
            Sign in
          </CustomButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#F0F2F5",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 21,
  },
  logo: {
    width: 120,
    height: 120,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 500,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 400,
    color: "#000000",
    opacity: 0.4,
  },
  buttomContainer: {
    height: 400,
  },
  bodyImageContanier: {},
  bodyImage1: {
    top: 160,
    height: 200,
    marginTop: 80,
  },
  bodyImage2: {
    height: 200,
    top: 60,
  },
  buttonContainer: {
    marginHorizontal: 16,
    gap: 6,
  },
});
