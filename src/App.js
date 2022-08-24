import React from "react";
import {Image, StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import HomeScreen from "./screens/Home";
import ChatScreen from "./screens/Chat";
import HeaderIcons from "./components/HeaderIcons";

//Here, the stack navigator required for switching between pages is created.
const Stack = createNativeStackNavigator();

const App = () => {
  //Here, two screens named home and chat are created in the stack navigator
  //and the necessary options of their headers are added.
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Here, the properties of the header of the home screen are set,
        and the icons that will come to the right of the header are set with the headerIcons component.*/}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {backgroundColor: "#128C7E"},
            headerTintColor: "white",
            headerTitle: "WhatsApp",
            headerShadowVisible: false,
            headerRight: () => <HeaderIcons headerType="home" />,
          }}
        />
        {/* Here, the properties of the header of the chat screen are set,
        and the icons that will come to the right of the header are set with the headerIcons component.
        In addition, the header header is set with the chatName parameter from the clicked chat.*/}
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({route}) => ({
            headerStyle: {backgroundColor: "#128C7E"},
            headerTintColor: "white",
            headerTitle: route.params.chatName,
            headerShadowVisible: false,
            headerTitleStyle: {fontSize: 16},
            headerBackVisible: true,
            headerLeft: () => (
              <Image
                source={{uri: route.params.chat.receiver.image}}
                style={styles.image}
              />
            ),
            headerRight: () => <HeaderIcons headerType="chat" />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//Here the styles of the stack screens are created.
const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: -20,
    marginRight: 5,
  },
});

export default App;
