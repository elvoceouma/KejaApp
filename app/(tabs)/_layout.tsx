import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

export const TabIcon = ({ icon, color, focused, name, size }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className={`w-${size} h-${size}`}
      />
      {/* <Text className={`${focused ? "font-psemibold" : "font-pregular"}`}>
        ----
      </Text> */}
    </View>
  );
};

const PageTabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1.5,
            borderTopColor: "#232533",
            height: 75,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
                size={6}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Find",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.search}
                color={color}
                name="Find"
                focused={focused}
                size={6}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="new"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Create"
                focused={focused}
                size={10}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Bookmark"
                focused={focused}
                size={6}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="chat"
          options={{
            title: "Chats",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Chats"
                focused={focused}
                size={6}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default PageTabsLayout;

const styles = StyleSheet.create({});
