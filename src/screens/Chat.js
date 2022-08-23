import React from "react";
import { SafeAreaView, FlatList } from "react-native";

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
      <FlatList
        keyExtractor={keyExtractor}
        data={chat.messages}
        renderItem={renderItem}
        overScrollMode="never"
        bounces={false}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;
