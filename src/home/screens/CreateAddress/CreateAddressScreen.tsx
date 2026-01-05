import { images } from "@/src/shared/constants/images";
import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./CreateAddress.styles";
import { nearbyPlaces } from "./dummyData";

export default function CreateAddressScreen() {
  const setTitleImage = (icon: string) => {
    switch (icon) {
      case "clock":
        return images.clock;

      case "home":
        return images.home;

      case "work":
        return images.briefcase;

      default:
        return images.location;
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Add Address</Text>
      </View>
      <View style={styles.addressButtonWrapper}>
        <Pressable style={styles.button}>
          <Image style={styles.buttonIcon} source={images.marker} />
          <Text style={styles.buttonText}>Current Location</Text>
        </Pressable>
      </View>
      <View style={styles.content}>
        <FlatList
          data={nearbyPlaces}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable style={styles.itemWrapper}>
              <View style={styles.item}>
                <View style={styles.leftSection}>
                  <Image source={setTitleImage(item.icon)} />
                  <Text style={styles.distance}>{item.distance}</Text>
                </View>
                <View style={styles.middleSection}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.address}>{item.address}</Text>
                </View>
                <View style={styles.rightSection}>
                  <Image source={images.forward} />
                </View>
              </View>
              <View style={styles.separator}/>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
