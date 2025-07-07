import cn from 'clsx';
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
interface CustomButtonProps{
    onPress?: ()=>void,
    title?:string,
    isLoading?:boolean,
    leftIcon? : string,
    style?:string,   
    textStyle?:string
}

const CustomButton = ({onPress,title="Click Me",style,textStyle,leftIcon,isLoading=false}:CustomButtonProps) => {
  return (
    <TouchableOpacity className={cn('custom-btn',style)} onPress={onPress}>
        {leftIcon}
        <View className= "flex-center flex-row">
            {isLoading?(
                <ActivityIndicator size="small" color={'white'}></ActivityIndicator>
            ):(
                <Text className={cn('text-white-100 paragraph-semibold', textStyle)}>{title}</Text>
            )}
        </View>
    </TouchableOpacity>
  )
}

export default CustomButton