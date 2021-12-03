import { StyleSheet, View, SafeAreaView, Image, Dimensions, ImageBackground } from "react-native";
import Header from "../components/header";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import SwiperFlatList from 'react-native-swiper-flatlist';
import { BottomNavigation, Text , Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Colors } from '../components/styles.js';
import { CustomPagination } from '../components/CustomPagination';
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient';


const Profile = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Edit Profile</Text>
    </View>
  );
}

export default Profile;
