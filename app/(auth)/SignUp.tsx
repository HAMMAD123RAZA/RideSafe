import { View, Text, Image, Dimensions, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { useSignUp } from '@clerk/clerk-expo';
import ReactNativeModal from 'react-native-modal';
import InputField from '@/components/InputField';
import CustomBtn from '@/components/CustomBtn';
import OAuth from '@/components/OAuth';
import { Link, router } from 'expo-router';


const SignUp = () => {
  const { width } = Dimensions.get('window');
  const { isLoaded, signUp, setActive } = useSignUp();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [verification, setVerification] = useState({
    state: 'default',
    error: '',
    code: '',
  });

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onSignUpPress = async () => {
    if (!isLoaded) return;
  
    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });
  
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
  
      console.log('Email verification initiated'); // Debugging
      setVerification({
        ...verification,
        state: 'pending',
      });
    } catch (err: any) {
      console.error('Signup error:', err);
      Alert.alert(err.errors[0]?.longMessage || 'An error occurred');
    }
  };
  
  const onPressVerify = async () => {
    if (!isLoaded) return;

    try {
      const completesignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      if (completesignUp.status === 'complete') {
        await setActive({ session: completesignUp.createdSessionId });
        setVerification({ ...verification, state: 'successful' });
      } else {
        setVerification({
          ...verification,
          state: 'failed',
          error: 'Verification Failed',
        });
      }
    } catch (err: any) {
      setVerification({
        ...verification,
        state: 'failed',
        error: err.errors[0]?.longMessage || 'An error occurred',
      });
      Alert.alert(err.errors[0].longMessage)
    }
  };

  return (
    <ScrollView>
      <Image
        source={{
          uri: 'https://carfromjapan.com/wp-content/uploads/2018/03/image-2-14-1024x683.jpg',
        }}
        style={{ width, height: 190 }}
      />
      <Text style={tw`font-bold text-center text-blue-500 text-xl`}>
        Create Your Own Account
      </Text>
      <View style={tw`p-4`}>
        <InputField
          label="Name"
          onChangeText={(value) => setForm({ ...form, name: value })}
          value={form.name}
          iconColor="gray"
          iconName="person"
          placeholder="Enter your name"
        />
        <InputField
          label="Email"
          onChangeText={(value) => setForm({ ...form, email: value })}
          value={form.email}
          iconColor="gray"
          iconName="mail"
          placeholder="Enter your Email"
        />
        <InputField
          label="Password"
          onChangeText={(value) => setForm({ ...form, password: value })}
          value={form.password}
          iconColor="gray"
          iconName="lock-open"
          placeholder="Enter your password"
        />
        <CustomBtn
          title="Sign Up"
          onPress={onSignUpPress}
          style={tw`p-2 m-2 bg-blue-500 rounded-full text-white font-bold`}
        />
        <OAuth />

        <View style={tw`flex-row px-7 justify-center py-3 gap-3 items-center`}>
          <Text className='font-bold text-xl' >Already have an account?</Text>
          <Link href="/(auth)/SignIn" style={tw`text-blue-500 font-bold`}>
            Login
          </Link>
        </View>
      </View>

      <ReactNativeModal
        isVisible={verification.state === 'pending'}
        onModalHide={() => {
          if (verification.state === 'successful') {
            setShowSuccessModal(true);
          }
        }}
      >
        <View style={tw`bg-white px-7 py-9 rounded-2xl min-h-[300px]`}>
          <Text style={tw`font-bold text-2xl mb-2`}>Verification</Text>
          <Text style={tw`text-gray-500 font-bold text-center mb-5`}>
            Enter the verification code sent to your email.
          </Text>
          <InputField
            label="Code"
            placeholder="12345"
            value={verification.code}
            iconName="lock-open"

            keyboardType="numeric"
            onChangeText={(code) => setVerification({ ...verification, code })}
          />
          {verification.error && (
            <Text style={tw`text-red-500 font-bold text-center`}>
              {verification.error}
            </Text>
          )}
          <CustomBtn
            title="Verify Email"
            onPress={onPressVerify}
            style={tw`mt-5 p-5 bg-green-500`}
          />
        </View>
      </ReactNativeModal>

      <ReactNativeModal isVisible={verification.state === 'successful'}>
        <View style={tw`bg-white p-4 rounded-lg`}>
          <Text style={tw`text-center text-lg font-bold mb-4`}>
            Verification Successful
          </Text>
          <Text style={tw`text-center text-gray-500 mb-4`}>
            You have successfully verified your email address.
          </Text>
          <CustomBtn
            title="Explore Home"
            onPress={() => router.push('/(root)/(tabs)/home')}
            style={tw`p-2 m-2 bg-blue-500 rounded-full text-white font-bold`}
          />
        </View>
      </ReactNativeModal>
    </ScrollView>
  );
};

export default SignUp;
