import { colors } from "@/src/shared/constants/colors";
import { fonts } from "@/src/shared/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    justifyContent: "center",
    height: 48,
    marginHorizontal: 12,
  },
  headerTitle: {
    fontFamily: fonts.medium_500,
    fontSize: 20,
    textAlign: "center",
    marginVertical: 13,
  },
  addressButtonWrapper: {
    justifyContent: "center",
    height: 46,
    backgroundColor: colors.secondary,
    marginVertical: 12,
    marginHorizontal: 12,
    borderRadius: 12,
  },
  button: { flexDirection: "row", alignItems: "center", marginHorizontal: 17 },
  buttonIcon: {},
  buttonText: {
    fontFamily: fonts.medium_500,
    fontSize: 16,
    marginLeft: 8,
  },
  content: {
    marginHorizontal: 12,
  },
  itemWrapper: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    height: 62
  },
  leftSection: {
    justifyContent: "center",
    alignItems: "center",
  },
  middleSection: {
    flex: 1,
    marginHorizontal: 10,
  },
  rightSection: {
    marginHorizontal: 6,
  },
  separator:{
    marginTop: 6,
    backgroundColor: colors.secondary,
    height: 1
  },
  title: {
    fontFamily: fonts.medium_500,
    fontSize: 16,
  },
  address: { fontFamily: fonts.regular_400, fontSize: 14, opacity: 0.4 },
  distance: { fontFamily: fonts.regular_400, fontSize: 12, opacity: 0.4 },
});
