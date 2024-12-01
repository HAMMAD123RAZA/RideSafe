import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomBtn from './CustomBtn'
import tw from 'twrnc'
// import google from '../assets/images/google.svg'
import google from '@/assets/images/google.svg'

const OAuth = () => {
  return (
    <View>
      <View style={tw`flex flex-row justify-center items-center mt-4 gap-x-3`}>
        <View style={tw`flex-1 h-[1px] bg-gray-300`}/>
        
        <Text style={tw`text-lg`}>Or</Text>
        <View style={tw`flex-1 h-[1px] bg-gray-300`}/>
      </View>

      <CustomBtn title="Login With Google" onPress={()=>{}} style={tw`p-1 m-2 bg-blue-500 rounded-full text-white  font-bold`}
      IconLeft={()=>(
        <Image source={{uri:"https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"}} resizeMode='contain' style={tw`w-2 h-2 mx-1`} />
      )}
      />

    </View>
  )
}

export default OAuth