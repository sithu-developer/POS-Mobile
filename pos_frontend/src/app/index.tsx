import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRight } from 'lucide-react-native';
import { Mail } from 'lucide-react-native';
import { LockKeyhole } from 'lucide-react-native';
import { Eye } from 'lucide-react-native';
import { EyeClosed } from 'lucide-react-native';
import { useState } from 'react';
import { themes } from '@/util/theme';


export default function HomeScreen() {
  const [ showPassword , setShowPassword ] = useState<boolean>(false);
  
  return (
    <SafeAreaView style={[styles.safeAreaContainer ]} >
      <View style={[ styles.container  ]} >
        <Text style={[ styles.text ]} >Welcome Back!</Text>
        <View style={[ styles.inputContainer ]} >
          <Mail  />
          <TextInput  placeholder='email' autoCapitalize='none'  style={[ styles.innerTextInput ]} />
        </View>
        <View style={[ styles.inputContainer ]} >
          <LockKeyhole  />
          <TextInput placeholder='password' secureTextEntry={!showPassword} style={[ styles.innerTextInput ]} />
          <Pressable onPress={() => setShowPassword(prev => !prev)} >
            {showPassword ? <EyeClosed size={20}  /> : <Eye size={20} /> }
          </Pressable>
        </View>
        <View style={[ { backgroundColor : "blue" , height : 5}]} >
          {/* <Checkbox /> */}
        </View>
        <Pressable style={[ styles.button , styles.logInButton ]} >
          <Text  style={[ styles.buttonText ]} >Log In</Text>
          <ArrowRight size={16} />
        </Pressable>
      </View>
      <View style={[ styles.dividerContainer ]} >
        <View style={[ styles.dividerLine ]}  />
        <Text style={[ styles.dividerText ]}>OR</Text>
        <View style={[ styles.dividerLine ]}  />
      </View>
      <Pressable style={({pressed}) => [ styles.button , styles.continueButton ]} >
        <Image alt='google icon' source={require("@/assets/images/google_icon.svg")} style={[ styles.image ]} />
        <Text style={[ styles.continueGoogleText ]} >Continue with google</Text>
      </Pressable>
      <View style={[ styles.signUpContainer ]} >
        <Text style={[ styles.lightText ]} >Don't have an account?</Text>
        <Text style={[ styles.linkText ]} >Sign Up</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer : {
    display : "flex",
    alignItems : "center",
    justifyContent : "center",
    flex : 1,
    padding : 10,
    gap : 15
  },
  container : {
    display : "flex",
    alignItems : "center",
    gap : 20,
    width : "100%",
  },
  text : {
    fontSize : 24
  },
  inputContainer : {
    flexDirection : "row",
    alignItems : "center",
    gap : 10,
    borderColor : "#060606",
    borderStyle : "solid",
    borderWidth : 1,
    borderRadius : 10,
    padding : 10,
    width : "80%",
    color : themes.light.primary
  },
  innerTextInput : {
    flex : 1,
    padding : 5,
    borderWidth : 0,
    outlineWidth : 0,
  },
  dividerContainer : {
    display : "flex",
    flexDirection : "row",
    alignItems : "center",
    gap : 10,
    width : '80%'
  },
  dividerLine : {
    borderWidth : 0.5,
    borderStyle : "solid",
    borderColor : "#4b4b4b7d",
    flex : 1,
    height : 1
  },
  dividerText : {
    fontWeight : "500",
    color : "rgba(65, 67, 70, 0.65)"
  },
  logInButton : {
    backgroundColor : themes.light.primary,
    color : "#fff"
  },
  continueButton : {
    borderWidth : 1,
    borderStyle : "solid",
    borderColor : "#4b4b4b7d"
  },
  button : {
    padding : 10,
    width : "80%",
    borderRadius : 30,
    display : "flex",
    flexDirection : "row",
    justifyContent : 'center',
    alignItems : "flex-end",
    gap : 10,
  },
  buttonText : {
    color : "#fff",
    fontWeight : "600",
  },
  continueGoogleText : {
    fontSize : 13,
    fontWeight : "400"
  },
  image : {
    width : 16,
    height : 16,
    resizeMode : "stretch"
  },
  signUpContainer : {
    display : "flex",
    flexDirection : "row",
    alignItems : "center",
    gap : 5
  },
  lightText : {
    color : "#7a818d",
    fontSize : 13
  },
  linkText : {
    textDecorationLine : "underline",
    textDecorationColor : themes.light.primary,
    color : themes.light.primary,
    cursor : "pointer",
    fontWeight : "500",
    fontSize : 13
  }
});
