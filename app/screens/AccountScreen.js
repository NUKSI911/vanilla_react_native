import React from 'react'
import { View, Text,StyleSheet,FlatList } from 'react-native'
import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import colors from '../config/colors'
import ItemListSeparator from './../components/ItemListSeperator' 

const menuItems  = [
    {
        title:'My Listings',
        icon:{
            name:'format-list-bulleted',
            backgroundColor:colors.primary
        }
    },
    {
        title:'My Messages',
        icon:{
            name:'email',
            backgroundColor:colors.secondary
        }
    }
]
const AccountScreen = () => {
    return (
      <Screen style={styles.screen}>
          <View style={styles.container}>

          <ListItem
          title="Nurudeen Yekeen"
          subTitle="nuksi911@gmail.com"
          image={require('../../assets/images/window.png')}
          />
          </View>
          <View style={styles.container}>
              <FlatList
              
              data={menuItems}
            keyExtractor = {(item)=>item.title}
            renderItem ={({item})=>
            <ListItem 
            title={item.title}
            IconComponent = { <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}
            
            />

            
        }
        ItemSeparatorComponent = {ItemListSeparator}
              />
          </View>
        <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout"   backgroundColor="#ffe66d"/>}
        
        />
      </Screen>
    )
}


const styles = StyleSheet.create({

    container:{
        marginVertical:20
    }
    ,
    screen:{
        flex:1, 
      backgroundColor:colors.light  
    }
})
export default AccountScreen
