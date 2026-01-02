import { colors } from "@/src/constants/colors";
import { fonts } from "@/src/constants/fonts";
import { useEffect, useRef, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Props = {
  length?: number;
  onComplete?: (otp: string) => void;
};

export default function OtpInput({ length = 6, onComplete }: Props) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const visibleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeIndex = otp.findIndex((d) => d === "");
  const cursorIndex = activeIndex === -1 ? length - 1 : activeIndex;

  function handleChange(text: string) {
    const char = text.slice(-1);
    if (!char) return;

    const index = otp.findIndex((d) => d === "");
    
    if (index === -1) return;

    const newOtp = [...otp];
    newOtp[index] = char;
    setOtp(newOtp);

    if (visibleTimeoutRef.current) {
      clearTimeout(visibleTimeoutRef.current);
    }

    setVisibleIndex(index);
    visibleTimeoutRef.current = setTimeout(() => {
      setVisibleIndex(null);
      visibleTimeoutRef.current = null;
    }, 500);

    if (index === length - 1) {
      onComplete?.(newOtp.join(""));
    }
  }

  function handleBackspace() {
    const index = otp.findLastIndex((d) => d !== "");
    if (index === -1) return;

    const newOtp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);
    
    if (visibleTimeoutRef.current) {
      clearTimeout(visibleTimeoutRef.current);
      visibleTimeoutRef.current = null;
    }
    
    setVisibleIndex(null);
  }

  function handlePress() {
    inputRef.current?.blur();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  }

  useEffect(() => {
    inputRef.current?.focus();
    return () => {
      if (visibleTimeoutRef.current) {
        clearTimeout(visibleTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      {otp.map((digit, index) => (
        <View 
          key={index}
          pointerEvents="none"
          style={[
            styles.box,
            isFocused && index === cursorIndex && styles.boxActive
          ]}
        >
          <Text 
            style={[
              styles.text,
              digit && visibleIndex !== index && { opacity: 0.6 }
            ]}
          >
            {digit
              ? visibleIndex === index
                ? digit
                : "*"
              : ""}
          </Text>
        </View>
      ))}

      <TextInput
        ref={inputRef}
        keyboardType="number-pad"
        style={styles.hiddenInput}
        maxLength={length}
        caretHidden={true}
        value=""
        contextMenuHidden={true}
        onChangeText={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyPress={({ nativeEvent }) => {
          if (nativeEvent.key === "Backspace") {
            handleBackspace();
          }
        }}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    width: '100%',
  },
  box: {
    width: 48,
    height: 56,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#D0D5DD",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F2F5",
  },
  boxActive: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  text: {
    fontFamily: fonts.medium_500,
    fontSize: 32,
    fontWeight: "500",
  },
  hiddenInput: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0,
  },
});