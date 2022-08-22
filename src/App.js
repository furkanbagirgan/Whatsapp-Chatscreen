import React from "react";
import { Image, StyleSheet } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import HomeScreen from "./screens/Home";
import ChatScreen from "./screens/Chat";
import HeaderIcons from "./components/HeaderIcons";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {backgroundColor: "#128C7E"},
            headerTintColor: "white",
            headerTitle: "WhatsApp",
            headerShadowVisible:false,
            headerRight:()=><HeaderIcons headerType="home" />
          }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({route})=>({
            headerStyle: {backgroundColor: "#128C7E"},
            headerTintColor: "white",
            headerTitle: route.params.chatName,
            headerShadowVisible:false,
            headerTitleStyle:{fontSize:15},
            headerBackVisible:true,
            headerLeft:()=><Image source={{uri:route.params.chat.receiver.image}} style={styles.image} />,
            headerRight:()=><HeaderIcons headerType="chat" />
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles=StyleSheet.create({
  image:{
    width:32,
    height:32,
    borderRadius:16,
    marginLeft:-20,
    marginRight:10
  }
});

export default App;
