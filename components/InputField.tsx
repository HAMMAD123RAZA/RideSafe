import { View, Text, KeyboardAvoidingView, TextInput, Platform, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

const InputField = ({ label, labelStyle, value, placeholder, onChangeText,iconColor,iconName }) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding':'height'} >

      <Text style={[tw`text-blue-500 py-2 text-lg `, labelStyle]}>{label}</Text>
      <View style={tw`mt-1 flex-row items-center gap-3 p-3 w-full border-2 border-neutral-300 rounded-lg`}>
        <Ionicons name={iconName} size={24} color={iconColor}  />
        <TextInput
          style={tw`px-3 py-2 text-white`} 
          value={value}
          placeholder={placeholder}
          placeholderTextColor="black" 
          onChangeText={onChangeText}
        />
      </View>

    </KeyboardAvoidingView>
  );
};

export default InputField;
