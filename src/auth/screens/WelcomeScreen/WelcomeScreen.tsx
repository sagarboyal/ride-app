import CustomButton from "@/src/shared/components/CustomButton";
import { Paths } from "@/src/shared/constants/paths";
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../../shared/constants/colors";
import { images } from "../../../shared/constants/images";
import styles from "./WelcomeScreen.styles";

export default function WelcomeScreen() {
  const router = useRouter();

  const forwardPath = () => {
    router.push(Paths.PHONE);
  };

  return (
    <SafeAreaView style={styles.container}>
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
            <ImageBackground style={styles.bodyImage} source={images.car} />
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Create Account"
              background={colors.primary}
              style={styles.buttonText}
              onPress={forwardPath}
            />
            <CustomButton
              title="Sign in"
              background={colors.secondary}
              style={[styles.buttonText, { color: "#000000" }]}
              onPress={forwardPath}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
