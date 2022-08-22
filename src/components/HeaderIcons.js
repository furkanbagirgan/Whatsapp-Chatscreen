import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HeaderIcons = ({headerType}) => {
  return (
    <>
      { headerType === "home" 
        ? 
          <View style={styles.container}>
            <Icon name="magnify" size={25} color="white" />
            <Icon name="dots-vertical" size={25} color="white" style={{marginLeft:15}} />
          </View>
        : 
          <View style={styles.container}>
            <Icon name="video" size={26} color="white" />
            <Icon name="phone" size={23} color="white" style={{marginLeft:17}} />
            <Icon name="dots-vertical" size={25} color="white" style={{marginLeft:15}} />
          </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HeaderIcons;
