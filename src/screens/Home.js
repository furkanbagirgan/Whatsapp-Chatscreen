import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

import TabBar from "../components/TabBar";
import ChatCard from "../components/ChatCard";
import * as Data from "../data.json";

const HomeScreen = ({navigation}) => {

  const keyExtractor=(item)=>{
    return String(item.id);
  }

  const renderItem=({item})=>{
    const name=item.receiver.firstName+" "+item.receiver.lastName;
    return (
      <ChatCard name={name} image={item.receiver.image} lastMessage={item.messages[item.messages.length-1]} handlePress={()=>goToChatDetail(item,name)}/>
    );
  }

  const goToChatDetail=(chat,chatName)=>{
    navigation.navigate("Chat",{chat,chatName});
  }

  return (
    <SafeAreaView style={styles.container}>
      <TabBar />
      <FlatList keyExtractor={keyExtractor} data={Data.chatList} renderItem={renderItem} overScrollMode="never" bounces={false}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
});

export default HomeScreen;
