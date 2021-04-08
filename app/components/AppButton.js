import React from 'react'
import colors from '../config/colors'
import { StyleSheet,View,Text, TouchableOpacity } from 'react-native'


function AppButton({title,onPress,color="primary"}) {
    return (
        <TouchableOpacity
            style={[styles.button,{backgroundColor:colors[color]}]}

            onPress={onPress}
        >

     <View>
         <Text >{title}</Text>
     </View>
         </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.primary,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        borderRadius:20,
        width:'100%',
        marginVertical:10
    },
    text:{
        color:colors.white,
        fontSize:18,
        textTransform:'uppercase'
    }
})

export default AppButton
