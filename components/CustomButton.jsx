import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({label, handlePress , constainerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
    className={` ${constainerStyles} bg-secondary rounded-xl min-h-[50px] justify-center items-center ${isLoading ? 'opacity-50': ''}`} 
    onPress={handlePress}
    disabled={isLoading}
    >
      <Text className ={`text-primary font-psemibold ${textStyles}`}>{label}</Text>
    </TouchableOpacity>
  )
}  

export default CustomButton