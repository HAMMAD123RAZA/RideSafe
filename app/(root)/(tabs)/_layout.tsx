import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabBarIcon=({focused,source})=>{
  return(
    <View>
      <Image />
    </View>
  )
}

const Layout = () => {

  return (
    <Tabs 
    screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:'#000',
      tabBarInactiveTintColor:'#666',
      tabBarStyle:{
        backgroundColor:'#fff',
        borderTopWidth:0,
        elevation:0,
        height:60,
      }
    }}
    initialRouteName='home'
    >
      <Tabs.Screen name='home'
      options={{
        title:'Home',
        headerShown:false,
        tabBarIcon:( )=> <Ionicons name='home' size={28} />     }}
      />
            <Tabs.Screen name='profile'
      options={{
        title:'profile',
        headerShown:false,
        tabBarIcon:( )=> <Ionicons name='people' size={28} />     }}
      />
      <Tabs.Screen name='chat'
      options={{
        title:'chat',
        headerShown:false,
        tabBarIcon:( )=> <Ionicons name='chatbox-outline' size={28} />     }}
      />
      <Tabs.Screen name='Rides'
      options={{
        title:'Rides',
        headerShown:false,
        tabBarIcon:( )=> <Ionicons name='car' size={28} />     }}
      />

      <Text>Layout</Text>
    </Tabs>
  )
}

export default Layout