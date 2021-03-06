import React from "react";
import { View, StyleSheet,Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";


export default  function Card({ title, subTitle, image }) {
 console.log(title, subTitle)
    return (
    <View style={styles.card}>
      <Image 
      style={styles.image}
    //   resizeMode="contain"
      source={image} />
      <View style={styles.detailsContainer}>

      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subTitle} >{subTitle}</AppText>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 30,
    overflow:'hidden'
  },
  title:{
   marginBottom: 7
  },
  detailsContainer:{
    padding:20
  },
  image:{
      width:'100%',
      height:200
  },
  subTitle:{
     color:colors.secondary,
     fontWeight:'bold'
  }
});



