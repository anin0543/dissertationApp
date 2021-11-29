import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Logo } from "./styles";
import { Colors } from "./styles";
import { create } from "react-native-pixel-perfect";
import Icon from "react-native-vector-icons/Ionicons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon style={{ paddingLeft: 10 }} size={30} name="md-menu"></Icon>
        <Logo
          source={{
            uri: "https://cdn-pleaziocl.pressidium.com/wp-content/uploads/2020/07/pleaz-logo.png",
          }}
        />
        <Icon name="notifications-outline" size={30}></Icon>
        {/* <Icon name="search" size={30}></Icon> */}
      </View>
    </View>
  );
};

const designResolution = {
  width: 390,
  height: 844,
};
const perfectSize = create(designResolution);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },

  header: {
    height: perfectSize(70),
    width: "100%",
    marginTop: perfectSize(75),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Header;
