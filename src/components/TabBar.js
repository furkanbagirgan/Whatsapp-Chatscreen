import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const TabBar = () => {
  return (
    <View style={styles.tabBar}>
      <Icon name="camera" size={22} color="white" style={styles.icon} />
      <View style={styles.activeTab}>
        <Text style={styles.activeTabText}>CHATS</Text>
        <View style={styles.tabLine} />
      </View>
      <Text style={styles.tabText}>STATUS</Text>
      <Text style={styles.tabText}>CALLS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#128C7E",
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    marginTop: 7,
    marginBottom: 10,
    marginLeft: -15,
    marginRight: -25,
    opacity: 0.7,
  },
  activeTab: {
    flexDirection: "column",
    alignItems: "center",
  },
  activeTabText: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  tabText: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 14,
    opacity: 0.7,
  },
  tabLine: {
    width: "160%",
    height: 4,
    backgroundColor: "white",
  },
});

export default TabBar;
