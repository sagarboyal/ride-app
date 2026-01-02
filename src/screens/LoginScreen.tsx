import PhoneForm from "@/src/components/auth/PhoneForm";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PhoneForm />
    </SafeAreaView>
  );
}
