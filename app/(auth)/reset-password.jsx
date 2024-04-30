import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router';

import CustomButton from '../../components/CustomButton';
import { images } from '../../constants';
import FormFiend from "../../components/FormFiend";
const passwordResetScreen = () => {
  const [form, setForm] = useState({
    email: "",
  });
  const [isSubmittingPassordResetData, setisSubmittingPassordResetData] = useState(false);

  const handleSubmitPasswordReset = () => {};
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85hv]  px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[100px] h-[30px]"
          />
          <Text className="text-xl text-gray-600 text-semibold mt-10 font-psemibold">
            A link to reset your password will be sent to your email inbox
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
          
         
          <CustomButton
            label={"Login"}
            handlePress={handleSubmitPasswordReset}
            constainerStyles="mt-10"
            isLoading={isSubmittingPassordResetData}
          />
          <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-lg font-psemibold text-secondary-100">
             Remembered Password? 
            </Text>
            <Link
              href="login"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default passwordResetScreen

const styles = StyleSheet.create({})