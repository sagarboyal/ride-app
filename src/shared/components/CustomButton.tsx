import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";

type CustomButtonProps = {
  title: string;
  background: string;
  style?: StyleProp<TextStyle>;
  onPress: () => void;
};

export default function CustomButton({
  title,
  background,
  style,
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
      <View>
        <Text style={[style]}>{title}</Text>
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
  pressed: {
    opacity: 0.9,
  },
});
