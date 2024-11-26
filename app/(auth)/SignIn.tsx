import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import Swiper from 'react-native-swiper';
import InputField from '@/components/InputField';
import CustomBtn from '@/components/CustomBtn';
import OAuth from '@/components/OAuth';
import { Link } from 'expo-router';

const SignIn = () => {
  const { width } = Dimensions.get('window');

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignInPress=async()=>{

  }

  return (
    <ScrollView>
      <Image
        source={{ uri: 'https://carfromjapan.com/wp-content/uploads/2018/03/image-2-14-1024x683.jpg' }}
        style={{ width, height: 220 }}
      />
      <Text style={tw`font-bold text-center text-blue-500  white text-xl`}>Login To Account</Text>
      <View style={tw`p-4`}>
        <InputField
          label="Name"
          onChangeText={(value) => setForm({ ...form, name: value })}
          value={form.name}
          iconColor='gray'
          iconName='person'
          placeholder="Enter your name"
        />
                <InputField
          label="Email"
          onChangeText={(value) => setForm({ ...form, email: value })}
          value={form.email}
          iconColor='gray'
          iconName='mail'
          placeholder="Enter your Email"
        />
        <InputField
          label="Password"
          onChangeText={(value) => setForm({ ...form, name: value })}
          value={form.password}
          iconColor='gray'
          iconName='lock-open'
          placeholder="Enter your password"
        />
        <CustomBtn title='Sign Up'  onPress={onSignInPress} style={tw`py-4 px-12 m-2 bg-blue-500 rounded-md text-white  font-bold`} 
        />
              <OAuth/>

              {/* <CustomBtn title='Login With Google' IconLeft={} onPress={onSignInPress} style={tw`py-4 px-12 m-2 bg-blue-500 rounded-md text-white  font-bold`} 
        /> */}

<View style={tw`flex-row px-7 py-3 gap-3 items-center gap3`}>
  <Text style={tw`font-bold`}>Dont have an account?</Text>
  <Link href='/(auth)/SignUp' style={tw`text-blue-500 font-bold`}>SignUp</Link>
</View>
      </View>

    </ScrollView>
  );
};

export default SignIn;  