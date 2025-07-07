import cn from 'clsx';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
interface CustomInputProps{
    placeholder?: string,
    value?:string,
    label:string,
    onChangeText?: (text:string)=>void,
    secureTextEntry?:boolean,
    keyboardType?:'default'|"email-address"|"numeric"|"phone-pad"
}

const CustomInput = ({placeholder = 'Enter text',value, onChangeText, label, secureTextEntry=false,keyboardType="default"}:CustomInputProps) => {
  const [isFocused,setIsFocused] = useState(false);
    return (
    <View className='w-full'>
      <Text className='label'>{label}</Text>
      <TextInput autoCapitalize='none' autoCorrect= {false} onChangeText={onChangeText} secureTextEntry= {secureTextEntry} keyboardType= {keyboardType}
      onFocus={()=> setIsFocused(true)} 
      onBlur={()=>{setIsFocused(false)}}
      placeholder={placeholder}
      placeholderTextColor='#888'
      className={cn('input',isFocused?'border-primary':'border-gray-300' )}/>
    </View>
  )
}

export default CustomInput