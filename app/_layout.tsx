import { fontAssets } from "@/src/shared/constants/fonts";
import { useFonts } from "@expo-google-fonts/outfit";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts(fontAssets);

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
