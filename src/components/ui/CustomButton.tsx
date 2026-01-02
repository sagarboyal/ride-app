import { fonts } from "@/src/constants/fonts";
import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type CustomButtonProps = {
  children: ReactNode;
  background: string;
  text: string;
  onPress: () => void;
};

export default function CustomButton({
  children,
  background,
  text,
  onPress
}: CustomButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        { backgroundColor: background },
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.button}>
        <Text style={[styles.text, { color: text }]}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    borderRadius: 16,
  },
  button: {},
  text: {
    fontFamily: fonts.medium_500,
    fontWeight: 500,
    fontSize: 18
  },
  pressed: {
    opacity: 0.9,
  },
});
