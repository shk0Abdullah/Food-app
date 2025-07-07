import { images } from '@/constants'
import { Slot } from 'expo-router'
import React from 'react'
import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'

export default function auth() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding' : "height" }>
        <ScrollView className= "bg-white h-full" keyboardShouldPersistTaps="handled">
            <View className='w-full relative' style={{height:Dimensions.get("screen").height/2.25}}>
                <ImageBackground source={images.loginGraphic} className='size-full rounded-b-lg ' resizeMode='stretch'></ImageBackground>
                <Image source= {images.logo} className= "self-center size-48 absolute -bottom-16"></Image>
            </View>
            <Slot/>
        </ScrollView>

    </KeyboardAvoidingView>
  )
}