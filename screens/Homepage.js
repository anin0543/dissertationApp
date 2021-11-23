import React from 'react';
import { Text, View } from 'react-native';

const Home = ({navigation, route }) => {
  // const { user_display_name, user_email } = route.params;
  var user_email = localStorage.getItem('user_email');
  var user_display_name = localStorage.getItem('user_display_name');
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Welcome 🎉</Text>
      <Text>{user_display_name } </Text>
      <Text>{user_email } </Text>
    </View>
  );
}

export default Home;