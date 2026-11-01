import { Dimensions, StyleSheet, Text, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomTabInset, Colors, MaxContentWidth, Spacing } from '@/constants/theme';
import TextField from '@/components/TextInput';
import { useTheme } from '@/hooks/use-theme';
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  const theme = useTheme();
  
  return (
    <SafeAreaView style={[styles.container , { backgroundColor : theme.background } ]} >
      <Text style={[ { color : theme.text }]} >Welcome Back!</Text>
      <TextField placeholder='Name' />
      <TextField placeholder='Password' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    padding : 10,
    display : "flex",
    gap : "30px",
    alignItems : "center",
    justifyContent : "center",
    // height : "100vh",
    flex : 1
  }
});
