import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import TabBar from "../components/TabBar";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TabBar />
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
