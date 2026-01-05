import { toastConfig } from "@/src/shared/config/toastConfig";
import { fontAssets } from "@/src/shared/constants/fonts";
import { useFonts } from "@expo-google-fonts/outfit";
import { Stack } from "expo-router";
import Toast from 'react-native-toast-message';

export default function RootLayout() {
  const [fontsLoaded] = useFonts(fontAssets);

  if (!fontsLoaded) return null;

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <Toast config={toastConfig}/>
    </>
  );
}
