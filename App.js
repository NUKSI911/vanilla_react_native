import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import React,{ useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Dimensions,
  Image,
  Alert,
  SafeAreaView,
  StatusBar,
  Platform,
  Button,
  TextInput,
  Switch,
} from "react-native";
import { Swipables } from "expo";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppPicker from "./app/components/AppPicker";
import colors from "./app/config/colors";
import AppTextInput from "./app/components/AppTextInput";
import LoginScreen from "./app/screens/LoginScreen";


const categories=[
  {
    label:"Shoe",
    value:"Shoe"
  },
  {
    label:"Bag",
    value:"Bag"
  },
  {
    label:"Chair",
    value:"Chair"
  },
  {
    label:"Trouser",
    value:"Trouser"
  },
]

export default function App() {
  return (
    <LoginScreen/>
  );
}


