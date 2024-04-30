import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router';

import CustomButton from '../../components/CustomButton';
import { images } from '../../constants';
import FormFiend from "../../components/FormField";
const registerScreen = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirm: "",

  });
  const [isSubmittingRefisterForm, setisSubmittingRefisterForm] = useState(false);

  const submitRegisterData = () => {};
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
            <FormFiend
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
            handlePress={submitRegisterData}
            constainerStyles="mt-10"
            isLoading={isSubmittingRefisterForm}
          />
           <CustomButton
            label={"Continue with Google"}
            handlePress={submitRegisterData}
            constainerStyles="mt-10"
            isLoading={isSubmittingRefisterForm}
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
  )
}

export default registerScreen

const styles = StyleSheet.create({})