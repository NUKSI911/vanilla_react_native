import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Constants from "expo-constants";
import ItemListSeperator from "../components/ItemListSeperator";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListingDetailsScreen from "./ListingDetailsScreen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/images/logo.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/images/logo.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../../assets/images/logo.jpg"),
  },
  {
    id: 4,
    title: "T4",
    description: "D4",
    image: require("../../assets/images/logo.jpg"),
  },
];

export default function MessageScreen() {
  const [messages, setMessages] = useState(initialMessages);
const [refreshing, setrefreshing] = useState(false)
  const handlePress = (message) => {};
  const handleDelete = (message) => {
    let filteredMsg = messages.filter((msg) => msg.id !== message.id);
    setMessages(filteredMsg);
  };
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={handlePress}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            renderLeftActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={ItemListSeperator}
        refreshing={refreshing}
        onRefresh={()=>setMessages([
            {
                id: 1,
                title: "T1",
                description: "D1",
                image: require("../../assets/images/logo.jpg"),
              },
              {
                id: 2,
                title: "T2",
                description: "D2",
                image: require("../../assets/images/logo.jpg"),
              },
              {
                id: 3,
                title: "T3",
                description: "D3",
                image: require("../../assets/images/logo.jpg"),
              },
        ])}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
      flex: 1
  },
});
