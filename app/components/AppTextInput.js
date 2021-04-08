import React from 'react'
import { View, Text, TextInput, Platform,StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from '../config/colors'

const AppTextInput = ({icon,color,...otherProps}) => {
    return (
        <View style={styles.container}>
            { icon && <MaterialCommunityIcons style={styles.icon}  name={icon} color={color}  size={20}/>}
            <TextInput style={styles.textInput} {...otherProps }  /> 
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius:25,
        flexDirection:'row',
        width:'100%',
        padding:15,
        marginVertical:10
    },
    textInput:{
        color:colors.dark,
        fontSize:18,
        fontFamily:Platform.OS === "android" ? "Roboto" : 'Avenir'
    },
    icon:{
        marginRight:10
    }
})
export default AppTextInput
