import { images } from "@/src/shared/constants/images";
import React, { useRef, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./CreateAddress.styles";
import { nearbyPlaces } from "./dummyData";

export default function CreateAddressScreen() {
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState(nearbyPlaces);

  const timeoutRef = useRef<number | null>(null);

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

  const searchPlaces = (text: string) => {
    if (!text) {
      setPlaces(places);
      return;
    }

    setPlaces(
      nearbyPlaces.filter((p) =>
        p.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const debouncedSearch = (text: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      searchPlaces(text);
    }, 500) as unknown as number;
  };

  const queryHandler = (enteredQuery: string) => {
    setQuery(enteredQuery);
    debouncedSearch(enteredQuery);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Add Address</Text>
      </View>
      <View style={styles.addressButtonWrapper}>
        <Pressable style={styles.button}>
          <Image style={styles.buttonIcon} source={images.marker} />
          {/* <Text style={styles.buttonText}>Current Location</Text> */}
          <TextInput
            style={styles.buttonText}
            placeholder="Search places"
            value={query}
            onChangeText={queryHandler}
          />
        </Pressable>
      </View>
      <View style={styles.content}>
        <FlatList
          data={places}
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
              <View style={styles.separator} />
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
