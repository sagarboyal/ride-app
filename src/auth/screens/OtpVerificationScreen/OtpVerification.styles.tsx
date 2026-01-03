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
    fontWeight: "500",
  },
  descriptionWrapper: {
    flexDirection: "row",
  },
  description: {
    fontFamily: fonts.regular_400,
    fontSize: 16,
  },
  otpInputWrapper: {
    marginHorizontal: 20,
    height: 62,
    marginTop: 32,
  },
  otpInput: {
    marginHorizontal: 6,
    borderColor: "black",
    borderWidth: 2
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "95%",
    marginHorizontal: 12,
    gap: 12,
    paddingBottom: 20,
  },
  buttonText:{
    fontFamily: fonts.medium_500,
    fontSize: 18,
    color: colors.secondary
  }
});