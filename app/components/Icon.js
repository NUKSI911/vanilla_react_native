import React from "react";
import { View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({ iconColor = "white", name, backgroundColor="black", size=40 }) {
  return (
    <View style={{
        width:size,
        height:size,
        borderRadius:size/2,
        backgroundColor,
        justifyContent:'center',
        alignItems:'center',
    }}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size/2} />
    </View>
  );
}
