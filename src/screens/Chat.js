import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Chat Screen</Text>
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
