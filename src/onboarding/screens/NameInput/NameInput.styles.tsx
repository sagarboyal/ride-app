import { colors } from "@/src/shared/constants/colors";
import { fonts } from "@/src/shared/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    height: 57,
    marginTop: 80,
    marginHorizontal: 30,
    gap: 6,
  },
  title: {
    fontFamily: fonts.medium_500,
    fontSize: 24,
  },
  description: {
    fontFamily: fonts.regular_400,
    fontSize: 16,
    opacity: 0.4,
    marginHorizontal: 2,
  },
  inputWrapper: {
    height: 57,
    marginTop: 50,
    marginHorizontal: 12,
  },
  input: {
    fontFamily: fonts.regular_400,
    fontSize: 16,
    opacity: 0.5,
    backgroundColor: colors.secondary,
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 10,
  },
    buttonText: {
    fontFamily: fonts.medium_500,
    fontSize: 18,
    color: colors.secondary,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "95%",
    marginHorizontal: 12,
    gap: 12,
    paddingBottom: 20,
  },
});
