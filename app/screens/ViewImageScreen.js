import React from "react";
import { Image, StyleSheet, View,Text } from "react-native";
import {  MaterialCommunityIcons} from '@expo/vector-icons'
import colors from "./../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
          <MaterialCommunityIcons size={30}  name="close" color="white"/>
      </View>
      <View style={styles.deleteIcon}>
      <MaterialCommunityIcons    size={35}   name="trash-can-outline" color="white"/>

      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("./../../assets/images/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,


  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
   
  },
  container: {
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
