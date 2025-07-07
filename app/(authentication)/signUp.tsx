
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { createUser } from '@/lib/appwrite'
import { Link, router } from 'expo-router'

import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'

function SignUp() {
 const [IsSubmitting, setIsSubmitting] = useState(false);
 const [form,setForm] = useState({name: '',email:'',password:''});
 const submit = async ()=>{
    if (!form.email || !form.name || !form.password) return Alert.alert( "Error", 'Please Enter valid Credentials')
    setIsSubmitting(true)
    try{
        await createUser({email:form.email,password:form.password,name:form.name})
        router.push('/(route)');

    }catch(error:any){
        Alert.alert("Error", error.message)
    }finally{
        setIsSubmitting(false);
    }
 }
  return (
    <View className='gap-10 bg-white rounded-lg p-5 mt-5'>
        < CustomInput  placeholder='Enter your Name' 
        value={form.name} 
        onChangeText={(text)=>setForm((prev)=>({...prev, name:text}))} label= "Name" 
        />
        < CustomInput  placeholder='Enter your email' 
        value={form.email} 
        onChangeText={(text)=>setForm((prev)=>({...prev, email:text}))} label= "Email" 
        keyboardType='email-address'/>
          < CustomInput  placeholder='Enter your password' 
          value={form.password} 
        onChangeText={(text)=>setForm((prev)=>({...prev, password:text}))} 
        label= "Password" 
    secureTextEntry={true}/>
        <CustomButton title='Sign Up'
        isLoading= {IsSubmitting} onPress={submit}/>
        <View className='flex-row justify-center items-center gap-2'> 
            <Text className='base-regular text-gray-100'>Already have an Account?</Text>
            <Link href= "/signIn" className="base-bold text-primary">Sign In</Link>
        </View>
    </View>
  )
}

export default SignUp