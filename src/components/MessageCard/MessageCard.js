import moment from "moment";
import React from "react";
import {View, Text} from "react-native";

import styles from "./MessageCard.style";

const MessageCard = ({message}) => {
  moment.locale("tr");

  return (
      <View style={styles.container}>
        <Text>{message.text}</Text>
      </View>
  );
};

export default MessageCard;
