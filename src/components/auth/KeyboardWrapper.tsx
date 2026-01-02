import { ReactNode, useEffect, useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleProp,
    ViewStyle
} from "react-native";

type keyboardWrapper = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
};

export default function KeyboardWrapper({ children, style }: keyboardWrapper) {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardOpen(true)
    );
    const hideSub = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardOpen(false)
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={[{ flex: 1 }, style]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={
        Platform.OS === "android" && keyboardOpen ? 30 : 0
      }
    >
      {children}
    </KeyboardAvoidingView>
  );
}
