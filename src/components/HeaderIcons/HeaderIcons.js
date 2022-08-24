import React from "react";
import {View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./HeaderIcons.style";

const HeaderIcons = ({headerType}) => {
  //Here, it is controlled over the headerType and icons are created accordingly.
  return (
    <>
      {headerType === "home" ? (
        <View style={styles.container}>
          <Icon name="magnify" size={25} color="white" />
          <Icon
            name="dots-vertical"
            size={25}
            color="white"
            style={styles.basicIcon}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Icon name="video" size={26} color="white" />
          <Icon name="phone" size={23} color="white" style={styles.chatIcon} />
          <Icon
            name="dots-vertical"
            size={25}
            color="white"
            style={styles.basicIcon}
          />
        </View>
      )}
    </>
  );
};

export default HeaderIcons;
