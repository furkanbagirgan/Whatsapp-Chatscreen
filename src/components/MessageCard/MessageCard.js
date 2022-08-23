import moment from "moment";
import React from "react";
import {View, Text} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./MessageCard.style";

const MessageCard = ({message}) => {
  moment.locale("tr");

  return (
    <View style={message.sender==="itself" ? styles.sendContainer : styles.receiveContainer}>
      <View style={message.sender==="itself" ? styles.rightCorner : styles.leftCorner}></View>
      <View style={styles.messageWrapper}>
        <Text style={styles.message}>{message.text}</Text>
      </View>
      <View style={styles.timeWrapper}>
        <Text style={styles.time}>{moment(message.datetime).format("hh:mm")}</Text>
        {
          message.sender==="itself" && <Icon name="check" size={15} color="black" style={{marginLeft:3}}/>
        }
      </View>
    </View>
  );
};

export default MessageCard;
