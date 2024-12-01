import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import Swiper from 'react-native-swiper';
import InputField from '@/components/InputField';
import CustomBtn from '@/components/CustomBtn';
import OAuth from '@/components/OAuth';
import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import {  TextInput, Button } from 'react-native'



const SignIn = () => {
  const { width } = Dimensions.get('window');
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()

  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) {
      return
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password:form.password,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/')
      } else {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
    }
  }, [isLoaded, form.email, form.password])



  return (
    <ScrollView>
      <Image
        source={{ uri: 'https://carfromjapan.com/wp-content/uploads/2018/03/image-2-14-1024x683.jpg' }}
        style={{ width, height: 220 }}
      />
      <Text style={tw`font-bold text-center text-blue-500  white text-xl`}>Login To Account</Text>
      <View style={tw`p-4`}>
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
          onChangeText={(value) => setForm({ ...form, password: value })}
          value={form.password}
          iconColor='gray'
          iconName='lock-open'
          placeholder="Enter your password"
        />
        <CustomBtn title='Sign In'  onPress={onSignInPress} style={tw`py-4 px-12 m-2 bg-blue-500 rounded-md text-white  font-bold`} 
        />
              <OAuth/>


<View style={tw`flex-row px-7 py-3 gap-3 items-center gap3`}>
  <Text style={tw`font-bold`}>Dont have an account?</Text>
  <Link href='/(auth)/SignUp' style={tw`text-blue-500 font-bold`}>SignUp</Link>
</View>
      </View>

    </ScrollView>
  );
};

export default SignIn;  