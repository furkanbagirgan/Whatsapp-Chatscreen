import moment from "moment";
import React from "react";
import {View, Image, Text, TouchableHighlight} from "react-native";

import styles from "./ChatCard.style";

const ChatCard = ({name, image, lastMessage, handlePress}) => {
  moment.locale("tr");

  return (
    <TouchableHighlight onPress={handlePress} underlayColor="#eee">
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <View style={styles.chatWrapper}>
          <View style={styles.receiverWrapper}>
            <Text style={styles.receiver}>{name}</Text>
            <Text style={styles.date}>
              {moment().day() == moment(lastMessage.datetime).day()
                ? moment(lastMessage.datetime).format("hh:mm")
                : moment(lastMessage.datetime).format("DD/MM/YYYY")}
            </Text>
          </View>
          <Text style={styles.message}>
            {lastMessage.sender === "itself"
              ? "Ben:" + lastMessage.text
              : lastMessage.text}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ChatCard;
