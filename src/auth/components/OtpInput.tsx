import { colors } from "@/src/shared/constants/colors";
import { fonts } from "@/src/shared/constants/fonts";
import { useRef, useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Props = {
  onComplete?: (otp: string) => void;
};

export default function OtpInput({ onComplete }: Props) {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [focused, setFocused] = useState<number | null>(null);
  const inputRef = useRef<(TextInput | null)[]>([]);
  
  const isDigit = /^[0-9]^/;
  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    
    if (text !== "" && index < otp.length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    const otpString = newOtp.join("");
    if (newOtp.every((digit) => digit !== "")) {
      inputRef.current[index]?.blur();
      onComplete?.(otpString);
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<{ key: string }>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRef.current[index - 1]?.focus();
    }else if(isDigit.test(e.nativeEvent.key) && otp[index] !==''){
      const newOtp = [...otp];
      newOtp[index] = e.nativeEvent.key;
      setOtp(newOtp);
      inputRef.current[index + 1]?.focus();
    }
  };

  const inputRefInitializer = (ref: TextInput | null, index: number) => {
    inputRef.current[index] = ref;
  };

  return (
    <View style={styles.screen}>
      {otp.map((digit, index) => {
        const isFocused = focused === index;
        const hasValue = digit !== "";

        return (
          <View key={index} style={styles.inputBox}>
            <TextInput
              style={[
                styles.input,
                hasValue && !isFocused && styles.hiddenInput,
              ]}
              value={digit}
              ref={(ref) => inputRefInitializer(ref, index)}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
              autoFocus={index === 0}
              onFocus={() => setFocused(index)}
              onBlur={() => setFocused(null)}
              cursorColor={colors.primary || "#000000"}
              selectionColor={colors.primary || "#000000"}
              caretHidden={!isFocused}
            />
            {hasValue && !isFocused && (
              <Text style={styles.asterisk}>*</Text>
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    gap: 10,
  },

  inputBox: {
    width: "14%",
    height: 62,
    borderRadius: 8,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  input: {
    fontFamily: fonts.medium_500,
    fontSize: 32,
    textAlign: "center",
    width: "100%",
    height: "100%",
    color: "#000000",
  },

  hiddenInput: {
    color: "transparent",
  },

  asterisk: {
    position: "absolute",
    fontFamily: fonts.medium_500,
    fontSize: 32,
    color: "#000000",
    pointerEvents: "none",
  },
});