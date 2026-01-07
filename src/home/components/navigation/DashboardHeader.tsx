import { AntDesign } from "@expo/vector-icons";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@/src/shared/constants/colors";
import { fonts } from "@/src/shared/constants/fonts";
import { images } from "@/src/shared/constants/images";

type DashboardHeaderProps = {
  username: string;
  onRightPress?: () => void;
};

export function DashboardHeader(
  props: DashboardHeaderProps
): NativeStackNavigationOptions {
  const { username, onRightPress } = props;

  return {
    headerShown: true,
    headerTitleAlign: "center",
    headerShadowVisible: false,

    headerStyle: {
      backgroundColor: "transparent",
    },

    headerBackground: () => <View style={styles.headerBackground} />,

    headerTitle: () => (
      <Text style={styles.headerTitleText}>
        hello, {username.toLowerCase()}!
      </Text>
    ),

    headerLeft: () => (
      <View style={styles.avatarWrapper}>
        <Image source={images.defaultProfile} style={styles.avatar} />
      </View>
    ),

    headerRight: () => (
      <Pressable onPress={onRightPress} style={styles.headerActionButton}>
        <AntDesign name="exclamation-circle" size={24} />
      </Pressable>
    ),
  };
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  headerTitleText: {
    fontFamily: fonts.medium_500,
    fontSize: 20,
  },
  avatarWrapper: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
    borderWidth: 2,
  },

  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
  },

  headerActionButton: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    padding: 8,
    marginRight: 16,
  },
});
