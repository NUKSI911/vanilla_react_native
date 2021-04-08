import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";
function WelcomeScreen(props) {
  return (
    <ImageBackground
    blurRadius={2}
      style={styles.background}
      source={require("./../../assets/images/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("./../../assets/images/logo.jpg")}
        />
        <Text style={styles.tagline}> Sell What You Dont Need</Text>
      </View>
         <View style={styles.buttonsContainer}>

      <AppButton title="Login" />
      <AppButton title="Register" color="secondary" />
     
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer:{
     padding:20,
    width:'100%'
  }
  ,
  tagLine:{
     fontSize:25,
     fontWeight:'600',
      paddingVertical:20,

  }
  ,
  logoContainer: {
    position: "absolute",
    top: 70,
    left: 20,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default WelcomeScreen;
