import { images } from "@/src/shared/constants/images";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Default.styles";
import { tripRequests } from "./dummyData";

export default function DefaultScreen() {
  const [request, setRequest] = useState(tripRequests);
  const username = "deepam";

  const renderIcons = (name: string) => {
    switch (name.toLowerCase()) {
      case "airplane":
        return (
          <Ionicons
            style={styles.tripRequestIcon}
            name="airplane-outline"
            size={24}
          />
        );
      case "briefcase":
        return (
          <Ionicons
            style={styles.tripRequestIcon}
            name="briefcase-outline"
            size={24}
          />
        );
      default:
        return (
          <AntDesign
            style={styles.tripRequestIcon}
            name="clock-circle"
            size={24}
          />
        );
    }
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.headerAvatar}>
          <Image source={images.defaultProfile} />
        </View>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>
            hello, {username.toLowerCase()}!
          </Text>
        </View>
        <Pressable style={styles.headerActionButton}>
          <AntDesign name="exclamation-circle" size={24} />
        </Pressable>
      </View>

      <View style={styles.searchSection}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Where are we going?"
          />
          <Ionicons name="search" size={26} />
        </View>
        <View style={styles.searchQuickActions}>
          <View style={styles.searchQuickAction}>
            <Ionicons
              style={styles.searchQuickActionIcon}
              name="home-outline"
              size={14}
            />
            <Text style={styles.searchQuickActionText}>Home</Text>
          </View>
          <View style={styles.searchQuickAction}>
            <Ionicons
              style={styles.searchQuickActionIcon}
              name="briefcase-outline"
              size={14}
            />
            <Text style={styles.searchQuickActionText}>Work</Text>
          </View>
          <View style={styles.searchQuickAction}>
            <Ionicons
              style={styles.searchQuickActionIcon}
              name="star-outline"
              size={14}
            />
            <Text style={styles.searchQuickActionText}>Saved</Text>
          </View>
        </View>
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.contentTitle}>Trips Requests</Text>
        <View style={styles.tripRequestList}>
          {/* <View style={styles.tripRequestItem}>
            <AntDesign
              style={styles.tripRequestIcon}
              name="clock-circle"
              size={24}
            />
            <View style={styles.tripRequestTextGroup}>
              <Text style={styles.tripRequestTitle}>Lal Bagh Palace</Text>
              <Text style={styles.tripRequestSubtitle}>Tomorrow, 5:45 PM</Text>
            </View>
            <View style={styles.tripRequestCountBadge}>
              <Text style={styles.tripRequestCountText}>3</Text>
            </View>
          </View>
          <View style={styles.separator}></View> */}
          <FlatList
            data={request}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <>
                  <Pressable style={styles.tripRequestItem}>
                    {renderIcons(item.icon)}
                    <View style={styles.tripRequestTextGroup}>
                      <Text style={styles.tripRequestTitle}>{item.place}</Text>
                      <Text style={styles.tripRequestSubtitle}>
                        {item.time}
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.tripRequestCountBadge,
                        !item.seen && styles.tripRequestCountBadgeSeen,
                      ]}
                    >
                      <Text
                        style={[
                          styles.tripRequestCountText,
                          !item.seen && styles.tripRequestCountTextSeen,
                          item.requestCount === 0 && { opacity: 0.4 },
                        ]}
                      >
                        {item.requestCount}
                      </Text>
                    </View>
                  </Pressable>
                  <View style={styles.separator}></View>
                </>
              );
            }}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerCard}>
          <View style={styles.footerAction}>
            <Feather
              name="arrow-down-left"
              style={styles.footerActionIcon}
              size={24}
            />
          </View>
          <View style={styles.footerDetails}>
            <View style={styles.footerDetailsHeader}>
              <Text style={styles.footerDetailsTitle}>
                {username.charAt(0).toUpperCase() + username.slice(1)} sent a
                request
              </Text>
              <MaterialIcons name="keyboard-arrow-right" size={20} />
            </View>
            <Text style={styles.footerDetailsSubtitle}>
              Balasaheb 302 Rd, Tripti Marg
            </Text>
          </View>
          <View style={styles.footerMatch}>
            <Text style={styles.footerMatchValue}>72%</Text>
            <Text style={styles.footerMatchLabel}>Match</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
