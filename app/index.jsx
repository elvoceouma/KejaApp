import { Link, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-secondary-200">
              The place you call home is{" "}
              <Text className="text-secondary">KEJA</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h--15px absolute -bottom-1 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-black-200 mt-7 text-center">
            Finding your next home has never been easier? Simply search
            find and rent
          </Text>
          <CustomButton
            label="Login to Continue"
            handlePress={() =>router.push('/login')}
            constainerStyles="w-full mt-7"
          />
             <CustomButton
            label="Create an Account"
            handlePress={() =>router.push('/register')}
            constainerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
