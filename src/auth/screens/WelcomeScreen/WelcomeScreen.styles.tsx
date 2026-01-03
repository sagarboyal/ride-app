import { colors } from "@/src/shared/constants/colors";
import { fonts } from "@/src/shared/constants/fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 21,
  },
  logo: {
    width: 120,
    height: 120,
    backgroundColor: colors.secondary,
    borderRadius: 60,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 32,
  },
  title: {
    fontFamily: fonts.medium_500,
    fontSize: 32,
  },
  subtitle: {
    fontFamily: fonts.regular_400,
    fontSize: 14,
    color: "black",
    opacity: 0.4,
  },
  buttomContainer: {},
  bodyImageContainer: {
    marginTop: 80,
  },
  bodyImage: {
    height: 250,
  },
  buttonContainer: {
    marginTop: 150,
    marginHorizontal: 16,
    gap: 6,
  },
  buttonText: {
    fontFamily: fonts.medium_500,
    fontSize: 18,
    color: colors.secondary,
  },
});

export default styles;
