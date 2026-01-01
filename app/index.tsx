import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WelcomeScreen />
    </SafeAreaView>
  );
}
