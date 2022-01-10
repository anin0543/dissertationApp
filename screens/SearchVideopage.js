import { StyleSheet, View, SafeAreaView, Image, Dimensions, ImageBackground } from "react-native";
import Header from "../components/header";
import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BottomNavigation, Text , Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {TextInput,ScrollView,TouchableOpacity, FlatList} from 'react-native-gesture-handler'
import { List } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const response = [
    {
        id: '1',
        title: 'Meeting Room',
        icon : require('../assets/imagesPLZ/domain.png'),
    },
    {
        id: '2',
        title: 'One Person',
        icon : require('../assets/imagesPLZ/account.png')
    },
    {
        id: '3',
        title: 'Family',
        icon : require('../assets/imagesPLZ/human-male-female-child.png')
    },
    {
        id: '4',
        title: 'On The Go',
        icon : require('../assets/imagesPLZ/rocket-launch-outline.png')
    },
    {
        id: '5',
        title: 'Factory',
        icon : require('../assets/imagesPLZ/fire.png')
    }
]


const SearchVideo = ({navigation}) => {
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>Settings!</Text>
    // </View>

    <ScrollView>
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingTop: 50,

            }}>
            <View style={styles.searchInputContainer}>
                <Icon name="search" size={25} color='#A9A9A9' />
                <TextInput placeholder= "Search situation, categorie, theme, ..." />
            </View>
            <View style={styles.sortBtn}>
                <Icon name="tune" color='#FFF' size={25} />
            </View>
        </View>

            <FlatList
                style={styles.flatlist}
                data={ response }
                keyExtractor={ item => item.id }
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Detail', {id: item.id})
                        }>
                            <List.Item 
                                title={ item.title }
                                left={props => <List.Icon {...props} icon={ item.icon } />}
                                />
                        </TouchableOpacity>
                    )
                }}
            />

    </ScrollView>


    
  );
}

const styles = StyleSheet.create({
    searchInputContainer: {
        height: 50,
        backgroundColor: '#f6f6f6',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    sortBtn: {
        backgroundColor: '#000',
        height: 50,
        width: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    flatlist: {
        paddingTop: 20,
        // backgroundColor: "pink",
        // borderWidth: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
})

export default SearchVideo;
