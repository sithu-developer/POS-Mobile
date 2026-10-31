import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import TextField from '@/components/TextInput';
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} >
      <Text>Welcome Back!</Text>
      <TextField placeholder='Name' />
      <TextField placeholder='Name' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    padding : 10,
    display : "flex",
    gap : "20px",
    alignItems : "center"
  }
});
