import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import MessageCard from "../components/MessageCard";

const ChatScreen = ({route}) => {
  const {chat,chatName}=route.params;

  const keyExtractor = (item,index) => {
    return String(index);
  };

  const renderItem = ({item}) => {
    return (
      <MessageCard message={item} />
    );
  };

  return (
    <SafeAreaView style={{flex: 1,backgroundColor: "#ebe5de"}}>
      <View style={{marginBottom:15}} />
      <FlatList
        keyExtractor={keyExtractor}
        data={chat.messages}
        renderItem={renderItem}
        overScrollMode="never"
        bounces={false}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.textInput}>
          <Icon name="emoticon-happy-outline" size={28} color="gray" />
          <View style={{flexDirection: "row"}}>
            <Icon name="attachment" size={28} color="gray" />
            <Icon name="camera" size={28} color="gray" style={{marginLeft:10}} />
          </View>
        </View>
        <View style={styles.voiceRecord}>
          <Icon name="microphone" size={25} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles=StyleSheet.create({
  bottomContainer:{
    width:"100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 15
  },
  textInput:{
    width:"83%",
    height:"100%",
    paddingLeft:10,
    paddingRight: 15,
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  voiceRecord:{
    width: 45,
    height: 45,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22.5,
    backgroundColor: "#128C7E",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default ChatScreen;
