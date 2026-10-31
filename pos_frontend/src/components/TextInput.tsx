import { Fonts } from "@/constants/theme";
import { StyleSheet, TextInput , type TextInputProps } from "react-native"

interface Props extends TextInputProps {

}

const TextField = ({ style , ...otherProps } : Props) => {
    return (
        <TextInput style={ [ styles.input , style ] } {...otherProps} />
    )
}

export default TextField;

const styles = StyleSheet.create({ 
  input : {
    width : "80%",
    height : "40px",
    padding : 10,
    borderWidth : 1,
    borderColor : "black",
    borderRadius : 1,
    fontFamily : Fonts.mono
  }
});