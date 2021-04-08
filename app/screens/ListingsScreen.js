import React from 'react'
import {  FlatList,StyleSheet } from 'react-native'
import Card from '../components/Card'

import Screen from '../components/Screen'
import colors from '../config/colors'


const listings = [
    {
         id:1,
         title :"Red Jacket for sale",
         price:100,
         image:require('../../assets/images/window.png')
    
    },
    {
         id:2,
         title :"Couch in great condition",
         price:500,
         image:require('../../assets/images/window.png')
    
    }
    ]

const ListingsScreen = () => {
    return (
        <Screen style={styles.screen} >
            <FlatList
            data={listings}
            keyExtractor={listItem=>listItem.id.toString()}
            renderItem={({item})=>
        <Card
        title={item.title}
        subTitle={`$${item.price}`}
        image={item.image}
        />    
        }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.light,
    }
})
export default ListingsScreen
