import { Text, View } from "react-native";
import { fonts } from "../constants/fonts";

export const toastConfig = {
  customSuccess: ({ text1, text2 }: any) => (
    <View
      style={{
        height: 80,
        width: "90%",
        backgroundColor: "#10b981",
        borderRadius: 12,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>
          {text1}
        </Text>
        {text2 && (
          <Text style={{ color: "#fff", fontSize: 14, marginTop: 4 }}>
            {text2}
          </Text>
        )}
      </View>
    </View>
  ),

  invalidOtpError: ({ text1 }: any) => (
    <View
      style={{
        height: 40,
        width: "30%",
        backgroundColor: "#ef4444",
        borderRadius: 20,
        padding: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontFamily: fonts.medium_500,
          color: "#fff",
          fontSize: 16,
        }}
      >
        {text1}
      </Text>
    </View>
  ),

  customError: ({ text1, text2 }: any) => (
    <View
      style={{
        height: 80,
        width: "90%",
        backgroundColor: "#ef4444",
        borderRadius: 12,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>
        {text1}
      </Text>
      {text2 && (
        <Text style={{ color: "#fff", fontSize: 14, marginTop: 4 }}>
          {text2}
        </Text>
      )}
    </View>
  ),
};
