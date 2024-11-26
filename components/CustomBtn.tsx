import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const CustomBtn = ({ onPress, title, style,IconLeft,IconRight,...props}) => {
  return (
    <TouchableOpacity onPress={() => {
      console.log("Button Pressed");
      onPress();  
    }} style={style}  >
      {IconLeft && <IconLeft/>}
      <Text style={tw`text-white text-center text-lg font-bold`} >{title}</Text>
      {IconRight && <IconRight/>}

    </TouchableOpacity>
  );
};

export default CustomBtn