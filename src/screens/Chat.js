import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const ChatScreen = ({route}) => {
  const {chat,chatName}=route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{chatName}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  text: {
    color: "black",
  },
});

export default ChatScreen;
