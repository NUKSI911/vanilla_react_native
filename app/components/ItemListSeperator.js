import React from 'react'
import colors from '../config/colors'
import {View,StyleSheet } from 'react-native'
export default function ItemListSeperator() {
    return (
     <View style={styles.seperator}>
     </View>
    )
}


const styles = StyleSheet.create({
    seperator:{
        width:'100%',
        height:1,
        backgroundColor:colors.light,
    }
})
