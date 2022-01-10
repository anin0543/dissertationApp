// import * as React from 'react';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import Home from "../screens/Homepage";
// import SearchVideo from "../screens/SearchVideopage";
// import Profile from "../screens/Profilepage";

// const Tab = createBottomTabNavigator();
// const FooterTabScreen = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: "Home",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Videos"
//         component={SearchVideo}
//         options={{
//           tabBarLabel: "Videos",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="magnify" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: "Profile",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
// export default FooterTabScreen;
