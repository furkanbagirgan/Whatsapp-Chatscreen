import {Dimensions, StyleSheet} from "react-native";

//Here the basic styles of the messageCard are created.
const basicStyles = StyleSheet.create({
  container: {
    padding: 10,
    maxWidth: "65%",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
});

////Here the styles of the messageCard are created.
const styles = StyleSheet.create({
  sendContainer: {
    ...basicStyles.container,
    backgroundColor: "#e0f6ca",
    alignSelf: "flex-end",
    marginRight: 15,
  },
  receiveContainer: {
    ...basicStyles.container,
    backgroundColor: "white",
    alignSelf: "flex-start",
    marginLeft: 15,
  },
  messageWrapper: {
    flexDirection: "row",
    flexShrink: 1,
  },
  message: {
    color: "black",
  },
  timeWrapper: {
    alignSelf: "flex-end",
    marginTop: 10,
    marginLeft: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    fontSize: 11,
    color: "black",
  },
  icon: {
    marginLeft: 3,
  },
  rightCorner: {
    position: "absolute",
    top: 0,
    right: -8,
    width: 0,
    height: 0,
    borderTopWidth: 0,
    borderBottomWidth: 40,
    borderLeftWidth: 20,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    borderLeftColor: "#e0f6ca",
  },
  leftCorner: {
    position: "absolute",
    top: 0,
    left: -8,
    backgroundColor: "white",
    width: 0,
    height: 0,
    borderTopWidth: 0,
    borderBottomWidth: 40,
    borderRightWidth: 20,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    borderRightColor: "white",
  },
});

export default styles;
