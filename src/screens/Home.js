import React from "react";
import {FlatList, SafeAreaView, View, Dimensions} from "react-native";

import TabBar from "../components/TabBar";
import ChatCard from "../components/ChatCard";
import * as Data from "../data.json";

const HomeScreen = ({navigation}) => {
  const keyExtractor = item => {
    return String(item.id);
  };

  const renderItem = ({item}) => {
    const name = item.receiver.firstName + " " + item.receiver.lastName;
    return (
      <ChatCard
        name={name}
        image={item.receiver.image}
        lastMessage={item.messages[item.messages.length - 1]}
        handlePress={() => goToChatDetail(item, name)}
      />
    );
  };

  const goToChatDetail = (chat, chatName) => {
    navigation.navigate("Chat", {chat, chatName});
  };

  const ItemDivider = () => {
    return (
      <View
        style={{
          width: Dimensions.get("screen").width - 94,
          height: 0.7,
          backgroundColor: "#ddd",
          alignSelf: "flex-end",
          marginRight: 15,
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      <TabBar
        tabs={["CHATS", "STATUS", "CALLS"]}
        activeTab="CHATS"
        iconName="camera"
      />
      <FlatList
        keyExtractor={keyExtractor}
        data={Data.chatList}
        renderItem={renderItem}
        overScrollMode="never"
        bounces={false}
        ItemSeparatorComponent={ItemDivider}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
