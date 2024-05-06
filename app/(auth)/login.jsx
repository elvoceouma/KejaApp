import { Text, ScrollView, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormFiend from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const loginScreen = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const submitLoginData = () => {
    console.log(form);
  };

  const handleOnGoogleSignIn = () => {};
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85hv]  px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[100px] h-[30px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Sign in To exlore listed Properties
          </Text>
          <FormFiend
            label="Email"
            value={form.email}
            handleonTextChanged={(e) =>
              setForm({
                ...form,
                email: e,
              })
            }
            formStyles="mt-7"
            keyBoardType="email-address"
          />
          <FormFiend
            label="Password"
            type="password"
            value={form.password}
            handleonTextChanged={(e) =>
              setForm({
                ...form,
                password: e,
              })
            }
            formStyles="mt-7"
          />
          <CustomButton
            label={"Login"}
            handlePress={submitLoginData}
            constainerStyles="mt-10"
            isLoading={isSubmittingForm}
          />
          <CustomButton
            label={"Login with Google"}
            handlePress={handleOnGoogleSignIn}
            constainerStyles="mt-10"
            isLoading={isSubmittingForm}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg font-psemibold text-secondary-100">
              Don't have an Account?
            </Text>
            <Link
              href="register"
              className="text-lg font-psemibold text-secondary"
            >
              Sign Up
            </Link>
          </View>
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg font-psemibold text-secondary-100">
              Forgot Password?
            </Text>
            <Link
              href="reset-password"
              className="text-lg font-psemibold text-secondary"
            >
              Reset
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default loginScreen;
