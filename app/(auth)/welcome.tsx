import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import tw from 'twrnc';
import { router } from 'expo-router';
import Swiper from 'react-native-swiper';
import { onboarding } from '@/constants/data';
import CustomBtn from '@/components/CustomBtn';
import index from '..';

const Welcome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const LastSlide=activeIndex===onboarding.length-1
  const swipRef = useRef<Swiper>(null);

  return (
    <SafeAreaView style={tw`flex h-full items-center justify-between bg-white`}>
      <TouchableOpacity
        onPress={() => router.replace('/(auth)/SignUp')}
        style={tw`flex w-full p-5 items-end justify-center`}
      >
        <Text style={tw`text-center py-10 text-blue-600 text-lg font-bold`}>Skip</Text>
      </TouchableOpacity>

<Swiper
ref={swipRef}
loop={false}
dot={<View style={tw`w-3 h-3 rounded-full mx-1 bg-gray-300`} />}
activeDot={<View style={tw`w-4 h-4 bg-blue-600 rounded-full mx-1`} />}
onIndexChanged={(index) => setActiveIndex(index)}
>

{onboarding.map((item)=>(
          <View key={item.id} style={tw`flex items-center justify-center h-full`}>
          <Text style={tw`text-4xl text-blue-600 text-center font-bold`}>{item.title}</Text>
          <Text style={tw`text-lg text-blue-600 text-center font-bold`}>{item.description}</Text>
        </View>
))}
</Swiper>
<CustomBtn 
  onPress={() => LastSlide ? router.replace('/(root)/(tabs)/home') : swipRef.current?.scrollBy(1)} 
  title={LastSlide ? "Get Started" : "Next"} 
  style={tw`py-4 px-12 m-2 bg-blue-500 rounded-md text-white font-bold`} 
/>
    </SafeAreaView>
  );
};

export default Welcome;