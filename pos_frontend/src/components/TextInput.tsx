import { Fonts } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, TextInput , type TextInputProps } from "react-native"

interface Props extends TextInputProps {

}

const TextField = ({ style , ...otherProps } : Props) => {
  const theme = useTheme();

    return (
        <TextInput style={ [ styles.input , style , { borderColor : theme.text , color : theme.text} ] } {...otherProps} />
    )
}

export default TextField;

const styles = StyleSheet.create({ 
  input : {
    width : "80%",
    height : "40px",
    padding : 10,
    borderWidth : 1,
    borderRadius : 7,
    fontFamily : Fonts.mono,
  }
});