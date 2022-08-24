import React from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  Dimensions,
  StyleSheet,
} from "react-native";

import TabBar from "../components/TabBar";
import ChatCard from "../components/ChatCard";
import * as Data from "../data.json";

const HomeScreen = ({navigation}) => {
  //Here is the function where key assignments of the fields to repeat in the flatlist are made.
  const keyExtractor = item => {
    return String(item.id);
  };

  //Here, there is a function that adjusts how the areas to be repeated in the
  //flatlist will appear on the screen. Also, a chatCard component is created for each chat.
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

  //Here is the function that allows switching to the chat screen when each chatCard component is clicked.
  const goToChatDetail = (chat, chatName) => {
    navigation.navigate("Chat", {chat, chatName});
  };

  //Here is the function that creates a line to appear between the areas to repeat in the flatlist.
  const ItemDivider = () => {
    return <View style={styles.divider} />;
  };

  //Here, the tabBar component and flatlist that will appear on the screen are created.
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

//Here the styles of the divider are created.
const styles = StyleSheet.create({
  divider: {
    width: Dimensions.get("screen").width - 94,
    height: 0.7,
    backgroundColor: "#ddd",
    alignSelf: "flex-end",
    marginRight: 15,
  },
});

export default HomeScreen;
