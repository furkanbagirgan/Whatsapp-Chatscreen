import React from "react";
import { View, Image, Text, TouchableHighlight, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ChatCard = ({name,image,lastMessage,handlePress}) => {
  return (
    <TouchableHighlight onPress={handlePress} underlayColor="#eee">
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={{uri:image}} style={styles.image} />
        </View>
        <View style={styles.chatWrapper}>
          <View style={styles.receiverWrapper}>
            <Text style={styles.receiver}>{name}</Text>
            <Text style={styles.date}>11:24</Text>
          </View>
          <Text style={styles.message}>{lastMessage.text}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  imageWrapper:{
    width: "20%",
    height: 54,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  image:{
    width: 54,
    height: 54,
    borderRadius: 27
  },
  chatWrapper:{
    width:"70%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  receiverWrapper:{
    width:"100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  receiver:{
    fontWeight: "bold",
    fontSize: 16,
    color:"black"
  },
  date:{
    fontSize: 12,
    color:"gray"
  },
  message:{
    color:"black"
  }
});

export default ChatCard;
