import OtpInputForm from "@/components/auth/OtpInputForm";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function otp() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <OtpInputForm />
    </SafeAreaView>
  );
}
