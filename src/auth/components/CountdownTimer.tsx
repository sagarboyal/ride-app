import { useEffect, useState } from "react";
import { StyleProp, Text, TextStyle } from "react-native";

type CountdownTimerProps = {
  duration?: number;  
  style?: StyleProp<TextStyle>;
};

export default function CountdownTimer({
  duration = 30,
  style,
}: CountdownTimerProps) {
  const [seconds, setSeconds] = useState(duration);

  useEffect(() => {
    if (seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return <Text style={style}>{seconds}s</Text>;
}
