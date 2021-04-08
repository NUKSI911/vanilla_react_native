import React from 'react';
import { View,StyleSheet,Platform,Text } from 'react-native'
import colors from '../config/colors';


function AppText({children,style}){

return(
     
    <Text style={[styles.text,style]}>
        {children}
    </Text>
)


}

const styles = StyleSheet.create({
    text:{
        color:colors.black,
        fontSize:18,
        fontFamily:Platform.OS ==='android' ? 'Roboto' : 'Courier'
    }
})

export default AppText;