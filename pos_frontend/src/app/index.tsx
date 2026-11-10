import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRight } from 'lucide-react-native';
import { Mail } from 'lucide-react-native';
import { LockKeyhole } from 'lucide-react-native';
import { Eye } from 'lucide-react-native';
import { EyeClosed } from 'lucide-react-native';
import { useState } from 'react';
import { ChefHat } from 'lucide-react-native';
import { Utensils } from 'lucide-react-native';
 

export default function HomeScreen() {
  const [ showPassword , setShowPassword ] = useState<boolean>(false);
  
  return (
    <SafeAreaView className='flex-1 justify-center items-center gap-4' >
      <View className='items-center w-screen gap-4' >
        <View className='relative flex-row items-baseline justify-center gap-2'>
          <ChefHat className='text-primary absolute -top-5 left-0 size-6' />
          <Text className="text-3xl font-bold text-primary font-inn" >Welcome Back</Text>
          <Utensils className='text-primary size-5 rotate-[23deg]' />
        </View>
        <View className='flex-row items-center gap-2 w-[80%] p-3 border-[1px] rounded-xl border-gray-400 text-primary bg-green-50' >
          <Mail className='size-5' />
          <TextInput  placeholder='email' autoCapitalize='none' className='flex-1 p-1 outline-none' />
        </View>
        <View className='flex-row items-center gap-2 w-[80%] p-3 border-[1px] rounded-xl border-gray-400 text-primary bg-green-50' >
          <LockKeyhole className='size-5' />
          <TextInput placeholder='password' secureTextEntry={!showPassword} className='flex-1 p-1 outline-none' />
          <Pressable onPress={() => setShowPassword(prev => !prev)} >
            {showPassword ? <EyeClosed className='size-5' /> : <Eye className='size-5' /> }
          </Pressable>
        </View>
        <Pressable className='bg-primary text-white flex-row items-center justify-center gap-3 w-[80%] p-3 rounded-3xl select-none' >
          <Text className='text-white font-semibold' >Log In</Text>
          <ArrowRight className='size-4 font-semibold' />
        </Pressable>
      </View>
      <View className='flex-row items-center gap-3 w-[80%]' >
        <View className='flex-1 border border-gray-300'  />
        <Text className='font-semibold text-gray-500' >OR</Text>
        <View className='flex-1 border border-gray-300' />
      </View>
      <Pressable className='border-gray-400 flex-row items-center justify-center gap-3 w-[80%] border rounded-3xl p-3 select-none' >
        <Image alt='google icon' source={require("@/assets/images/google_icon.svg")} style={[ styles.image ]} />
        <Text className='text-xs font-semibold text-gray-700' >Continue with Google</Text>
      </Pressable>
      <View className='flex-row gap-2 items-center' >
        <Text className='text-xs text-gray-500' >Don't have an account?</Text>
        <Text className='text-xs text-primary underline underline-offset-1 font-semibold'>Sign Up</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image : {
    width : 16,
    height : 16,
    resizeMode : "stretch"
  },
});
