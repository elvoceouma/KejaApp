import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";

import CustomButton from "../../components/CustomButton";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import { registerUser } from "../../utils/user";

const registerScreen = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [submittingRegisterForm, setSubmittingRegisterForm] =
    useState(false);

  const registerByEmail = async ({ firstName, lastName, email, password }) => {
    setSubmittingRegisterForm(true);
    try {
      const user = await registerUser(firstName, lastName, email, password);
      console.log(user);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmittingRegisterForm(false);
    }
  };

  const handleOnGoogleRegister = () => {};
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
            There are over +3000 homes and apartments in Your Area
          </Text>
          <FormField
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
          <FormField
            label="First Name"
            value={form.firstName}
            handleonTextChanged={(e) =>
              setForm({
                ...form,
                email: e,
              })
            }
            formStyles="mt-7"
            keyBoardType="email-address"
          />
          <FormField
            label="Last Name"
            value={form.lastName}
            handleonTextChanged={(e) =>
              setForm({
                ...form,
                email: e,
              })
            }
            formStyles="mt-7"
            keyBoardType="email-address"
          />
          <FormField
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
          <FormField
            label="Confirm Password"
            type="password"
            value={form.passwordConfirm}
            handleonTextChanged={(e) =>
              setForm({
                ...form,
                passwordConfirm: e,
              })
            }
            formStyles="mt-7"
          />
          <CustomButton
            label={"Sign Up"}
            handlePress={registerByEmail}
            constainerStyles="mt-10"
            isLoading={submittingRegisterForm}
          />
          <CustomButton
            label={"Continue with Google"}
            handlePress={handleOnGoogleRegister}
            constainerStyles="mt-10"
            isLoading={submittingRegisterForm}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg font-psemibold text-secondary-100">
              Already have an Account?
            </Text>
            <Link
              href="login"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
          <View className="justify-center pt-5 flex-row gap-2">
            <Link
              href="/manager-register"
              className="text-lg font-pextrabold text-secondary border-"
            >
              Create a property manager's Account
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default registerScreen;

const styles = StyleSheet.create({});
