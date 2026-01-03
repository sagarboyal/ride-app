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
  description: {
    fontFamily: fonts.regular_400,
    fontSize: 16,
    fontWeight: 400,
    opacity: 0.4,
    marginHorizontal: 2,
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 57,
    marginTop: 32,
    marginHorizontal: 16,
  },
  countryCode: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    backgroundColor: colors.secondary,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginVertical: 2,
  },
  code: {
    fontFamily: fonts.regular_400,
    fontSize: 16,
    fontWeight: 400,
    marginLeft: 3,
  },
  inputContainer: {
    justifyContent: "center",
    backgroundColor: colors.secondary,
    borderRadius: 12,
    width: "76%",
    marginVertical: 2,
    marginHorizontal: 12,
  },
  input: {
    fontFamily: fonts.regular_400,
    fontSize: 16,
    paddingLeft: 16,
    paddingVertical: 12,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "95%",
    marginHorizontal: 12,
    gap: 12,
    paddingBottom: 20,
  },
  lineContainer: {
    alignItems: "center",
  },
  lineText: {
    fontFamily: fonts.regular_400,
    fontSize: 14,
    fontWeight: "400",
    color: "black",
  },
  buttonText: {
    fontFamily: fonts.medium_500,
    fontSize: 18,
    color: colors.secondary,
  },
});
