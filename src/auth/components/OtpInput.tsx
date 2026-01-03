import { useRef, useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

type Props = {
  onComplete?: (otp: string) => void;
};

export default function OtpInput({ onComplete }: Props) {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRef = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text !== "" && index < otp.length - 1)
      inputRef.current[index + 1]?.focus();

    const otpString = newOtp.join("");
    if (newOtp.every((digit) => digit !== "")) {
      onComplete?.(otpString);
    }
  };
  const handleKeyPress = (
    e: NativeSyntheticEvent<{ key: string }>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  };

  const inputRefInitializer = (ref: TextInput | null, index: number) => {
    inputRef.current[index] = ref;
  };
  return (
    <View style={styles.screen}>
      {otp.map((digit, index) => {
        return (
          <View key={index} style={styles.border}>
            <TextInput
              value={digit}
              ref={(ref) => inputRefInitializer(ref, index)}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
              autoFocus={index === 0}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
  },
  border: {
    borderColor: "red",
    borderWidth: 2,
    width: "16.666%",
  },
});
