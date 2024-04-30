import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  label,
  value,
  placeholder,
  handleonTextChanged,
  formStyles,
  keyBoardType,
  type,
  ...props
}) => {
  const [togglePasswordVisible, setTogglePasswordVisible] = useState(false);
  return (
    <View classname={`space-y-2 ${formStyles}`}>
      <Text classname="text-base text-black-100 font-pmedium">{label}</Text>
      <View className="w-full h-16 px-4 bg-secondary-200 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleonTextChanged}

          secureTextEntry={type === "password" && !togglePasswordVisible}
          {...props}
        />
        {type === "password" && (
          <TouchableOpacity
            onPress={() => setTogglePasswordVisible(!togglePasswordVisible)}
          >
            <Image
              source={!togglePasswordVisible ? icons.eyeHidden : icons.eye}
              className="h-10 w-10"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
