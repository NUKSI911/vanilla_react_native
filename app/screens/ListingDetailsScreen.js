import React from 'react';
import { View,Image,StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
       <View>
        <Image   style={styles.image} source={require('../../assets/images/window.png')}/>
        <View style={styles.detailContainer}>
        <AppText  style={styles.title}> Red jacket for Sale</AppText>
        <AppText  style={styles.price}> 100%</AppText>
        <View style={styles.userContainer}>

        <ListItem
        title="Nurudeen"
        subTitle="5 listings"
        image={require("../../assets/images/logo.jpg")}
        />
        </View>
        </View>

       </View>
    );
}


const styles= StyleSheet.create({
image:{
    width:'100%',
    height:300 
},
detailContainer:{
    padding:20
},
price:{
    color:colors.secondary,
    fontSize:22,
    fontWeight:'bold',
    marginVertical:10
},
title:{
    fontSize:24,
    fontWeight:'500'
},
userContainer:{
    marginVertical:40
}
})

export default ListingDetailsScreen;