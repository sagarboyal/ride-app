import { colors } from "@/src/shared/constants/colors";
import { fonts } from "@/src/shared/constants/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 25,
    marginVertical: 2,
  },
  headerAvatar: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 50,
    padding: 2,
  },
  headerTitle: { flex: 1, alignItems: "center" },
  headerTitleText: {
    fontFamily: fonts.medium_500,
    textAlign: "center",
    fontSize: 20,
  },
  headerActionButton: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },

  searchSection: {
    marginHorizontal: 12,
    height: 124,
    justifyContent: "center",
    gap: 6,
    marginVertical: 8,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 54,
    backgroundColor: colors.secondary,
    borderRadius: 16,
  },
  searchInput: {
    flex: 0.9,
    fontFamily: fonts.medium_500,
    fontSize: 20,
    marginLeft: 16,
  },
  searchQuickActions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 38,
    gap: 10,
  },
  searchQuickAction: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary60,
    borderRadius: 12,
  },
  searchQuickActionIcon: {
    marginRight: 5,
  },
  searchQuickActionText: {
    fontFamily: fonts.regular_400,
    fontSize: 14,
  },

  contentSection: {
    marginHorizontal: 12,
    marginTop: 16,
  },
  contentTitle: {
    fontFamily: fonts.medium_500,
    fontSize: 22,
    marginHorizontal: 16,
  },
  tripRequestList: {
    marginVertical: 16,
  },
  tripRequestItem: {
    flexDirection: "row",
    height: 62,
    marginHorizontal: 16,
    alignItems: "center",
  },
  tripRequestIcon: {
    marginRight: 12,
  },
  tripRequestTextGroup: {
    flex: 1,
  },
  tripRequestTitle: {
    fontFamily: fonts.medium_500,
    fontSize: 16,
  },
  tripRequestSubtitle: {
    fontFamily: fonts.medium_500,
    fontSize: 14,
    opacity: 0.4,
  },
  tripRequestCountBadge: {
    backgroundColor: colors.secondary,
    width: 32,
    height: 32,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tripRequestCountBadgeSeen: {
    backgroundColor: colors.primary,
  },
  tripRequestCountText: {
    fontFamily: fonts.medium_500,
    fontSize: 16,
    textAlign: "center",
    padding: 6.5,
  },
  tripRequestCountTextSeen: {
    color: 'white'
  },
  separator: {
    backgroundColor: colors.secondary,
    height: 1,
    marginHorizontal: 16,
    marginTop: 8,
  },

  footer: {
    position: "absolute",
    bottom: 17,
    width: "100%",
    height: 125,
    justifyContent: "center",
  },
  footerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.secondary40,
    height: 75,
    marginHorizontal: 8,
    borderRadius: 30,
    gap: 10,
  },
  footerAction: {
    width: 32,
    height: 32,
    backgroundColor: colors.primary25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    marginLeft: 16,
  },
  footerActionIcon: {
    color: colors.primary,
  },
  footerDetails: {
    flex: 1,
  },
  footerDetailsHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerDetailsTitle: {
    fontFamily: fonts.medium_500,
    fontSize: 16,
  },
  footerDetailsArrow: {
    width: 16,
    height: 16,
    color: "black",
  },
  footerDetailsSubtitle: {
    fontFamily: fonts.regular_400,
    fontSize: 14,
    opacity: 0.4,
  },
  footerMatch: {
    marginRight: 12,
    backgroundColor: colors.secondary,
    width: 54,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  footerMatchValue: {
    fontFamily: fonts.medium_500,
    fontSize: 14,
  },
  footerMatchLabel: {
    fontFamily: fonts.regular_400,
    fontSize: 12,
    opacity: 0.4,
  },
});
