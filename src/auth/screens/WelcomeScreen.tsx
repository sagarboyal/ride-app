import CustomButton from "@/src/shared/components/CustomButton";
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../shared/constants/colors";
import { fonts } from "../../shared/constants/fonts";
import { images } from "../../shared/constants/images";

export default function WelcomeScreen() {
  const router = useRouter();
  const forwardPath = "/phone";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}></View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hatch App</Text>
          <Text style={styles.subtitle}>Match and Pool for Trips</Text>
        </View>
        <View style={styles.buttomContainer}>
          <View style={styles.bodyImageContainer}>
            <ImageBackground
              style={styles.bodyImage}
              source={images.car}
            />
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton
              background={colors.primary}
              text="white"
              onPress={() => router.push(forwardPath)}
            >
              Create Account
            </CustomButton>
            <CustomButton
              background={colors.secondary}
              text="black"
              onPress={() => router.push(forwardPath)}
            >
              Sign in
            </CustomButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 21,
  },
  logo: {
    width: 120,
    height: 120,
    backgroundColor: colors.secondary,
    borderRadius: 60
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 32,
  },
  title: {
    fontFamily: fonts.medium_500,
    fontSize: 32,
    fontWeight: 500,
  },
  subtitle: {
    fontFamily: fonts.regular_400,
    fontSize: 14,
    fontWeight: 400,
    color: "black",
    opacity: 0.4,
  },
  buttomContainer: {},
  bodyImageContainer: {
    marginTop: 80,
  },
  bodyImage: {
    height: 250,
  },
  buttonContainer: {
    marginTop: 150,
    marginHorizontal: 16,
    gap: 6,
  },
});