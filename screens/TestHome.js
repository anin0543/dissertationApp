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


const { width, height } = Dimensions.get('window');


const TestHome = ({navigation}) => {
  return (
<View style={{
    backgroundColor:"#FFF",
    flex:1
}}>

    <SwiperFlatList
    autoplay
    autoplayLoop
    autoplayDelay={10}
    showPagination
            PaginationComponent={CustomPagination}
    paginationActiveColor="black"
    paginationStyleItem={{ width: 10, height: 10, marginHorizontal: 5,  }}>
    <View style={style.child}>
      <Image
        source={{ uri: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61609bea76e0111d074d178e%2FAerial-View-of-Rough-Sea-Waves%2F960x0.jpg%3Ffit%3Dscale'}}
        style={style.image}
      />
    </View>
    <View style={style.child}>
    <Image
        source={{ uri: 'https://d39l2hkdp2esp1.cloudfront.net/img/photo/55085/55085_00_2x.jpg?20151124071914'}}
        style={style.image}
      />
    </View>
    <View style={style.child}>
    <Image
        source={{ uri: 'https://wallpapercave.com/wp/wp7681749.jpg'}}
        style={style.image}
      />
    </View>
    <View style={style.child}>
    <Image
        source={{ uri: 'https://wallpapercave.com/wp/wp4428241.jpg'}}
        style={style.image}
      />
    </View>
    </SwiperFlatList>

    {/* <View style={{width:"50%"}}>
        <Text>This Week's Pleaser</Text>
    </View> */}



{/* ici */}

    {/* <View style={{
        flexDirection:"row",
        paddingHorizontal:400,
        width:"100%",
        alignItems:"center",
        marginTop:-80,
        marginLeft:-200,
    }}>
        <View style={{width:"50%"}}>
            <Text style={{
                fontWeight:"bold",
                fontSize:17,
                color:"#585a61"
            }}>Featured Plants</Text>
            <View style={{
                height:4,
                backgroundColor:"#b1e5d3",
                width:115,
                marginTop:-5
            }}>

            </View>
        </View>

        <View style={{width:"50%", alignItems:"flex-end"}}>
            <View style={{
                backgroundColor:"#00a46c",
                paddingHorizontal:20,
                paddingVertical:5,
                borderRadius:15
            }}>
                <Text style={{
                    fontWeight:"bold",
                    fontSize:13,
                    color:"#FFF"
                }}>More</Text>
            </View>
        </View>
    </View>
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginBottom:-100}}
    >
        <Image
            source={require("./../assets/images/18.png")}
            style={{marginTop:500,marginHorizontal:20}}
        />
        <Image
            source={require("./../assets/images/19.png")}
            style={{marginTop:500,borderRadius:10}}
        />
        <Image
            source={require("./../assets/images/18.png")}
            style={{marginTop:500,borderRadius:10}}
        />
    </ScrollView> */}
</View>

    







    // <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
    //   <StatusBar translucent backgroundColor={Colors.tranparent} />
    //   <Image
    //     source={{ uri: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61609bea76e0111d074d178e%2FAerial-View-of-Rough-Sea-Waves%2F960x0.jpg%3Ffit%3Dscale'}}
    //     style={style.image}
    //   />
    //   <View style={style.indicatorContainer}>
    //     <View style={[style.indicator, style.indicatorActive]} />
    //     <View style={style.indicator} />
    //     <View style={style.indicator} />
    //     <View style={style.indicator} />
    //   </View>
      
    // </SafeAreaView>
  );
};

const style = StyleSheet.create({
//   image: {
//     //height: height * 0.5,
//     //width,
//     height: 420,
//     width: '100%',
//     borderBottomLeftRadius: 100,
//   },
  child: {
    height: width * 0.80,
    width,
    justifyContent: 'center'
  },
  // image: {
  //   height: 420,
  //   width: '100%',
  //   borderBottomLeftRadius: 100,
  // },
  indicatorContainer: {
    height: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    height: 4,
    width: 30,
    backgroundColor: Colors.grey,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  indicatorActive: {
    backgroundColor: Colors.dark,
  }
});

export default TestHome;
