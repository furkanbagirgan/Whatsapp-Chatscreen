import React from "react";
import {View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HeaderIcons = ({headerType}) => {
  //Here, it is controlled over the headerType and icons are created accordingly.
  return (
    <>
      {headerType === "home" ? (
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Icon name="magnify" size={25} color="white" />
          <Icon
            name="dots-vertical"
            size={25}
            color="white"
            style={{marginLeft: 15}}
          />
        </View>
      ) : (
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Icon name="video" size={26} color="white" />
          <Icon name="phone" size={23} color="white" style={{marginLeft: 17}} />
          <Icon
            name="dots-vertical"
            size={25}
            color="white"
            style={{marginLeft: 15}}
          />
        </View>
      )}
    </>
  );
};

export default HeaderIcons;
