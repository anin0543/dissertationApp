import React from 'react';
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';

import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler';

// Components
import Header from '../components/header';
import { CustomPagination } from '../components/CustomPagination';

// React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import SearchVideo from '../screens/SearchVideopage';


// import { LinearGradient } from 'expo-linear-gradient'
// import LinearGradient from 'react-native-linear-gradient';

const Home = ({navigation}) => {


    return(

        <><Header />

      
        <View style={{
          backgroundColor: "#FFF",
          flex: 1,
        }}>


        {/* first carousel */}
        <View style={{
          flex: 1,
          paddingTop: 5,
          // backgroundColor: "beige",
          // borderWidth: 5,
        }}>
        <View style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          width: "100%",
          alignItems: "center",
          marginTop: 10,
        }}>
          <View style={{ width: "50%" }}>
            <Text style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "#585a61"
            }}>News</Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <View style={{
              backgroundColor: "#292555",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15
            }}>
              <Text style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF"
              }}>More</Text>
            </View>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: -100 }}
          showPagination
            PaginationComponent={CustomPagination}
        >
          <Image
            source={require("./../assets/images/18.png")}
            style={styles.stretch} />
          <Image
            source={require("./../assets/images/19.png")}
            style={styles.stretch}/>
          <Image
            source={require("./../assets/images/6.png")}
            style={styles.stretch} />
        </ScrollView>
        </View>


        {/* second carousel */}

        <View style={{
          flex: 1,
          // backgroundColor: "pink",
          // borderWidth: 5,
          // borderBottomLeftRadius: 20,
          // borderBottomRightRadius: 20,
          }}>
          <View style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            alignItems: "center",
            marginTop: 10,
          }}>
            <View style={{ width: "50%" }}>
              <Text style={{
                fontWeight: "bold",
                fontSize: 17,
                color: "#585a61"
              }}>Recommended</Text>

            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <View style={{
                backgroundColor: "#292555",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15
              }}>
                <Text style={{
                  fontWeight: "bold",
                  fontSize: 13,
                  color: "#FFF"
                }}>More</Text>
              </View>
            </View>
          </View>

          

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ height: 400 }}
          >
            <TouchableOpacity
              // onPress={() => navigation.navigate("Detail")}
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160
              }}
            >
              <Image
                source={require('./../assets/images/4.png')}
              />

              <View style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingHorizontal: 10
              }}>

                <Text style={{
                  fontWeight: "bold"
                }}>SAMANTHA</Text>
                <Text style={{
                  fontWeight: "bold",
                  color: "#333333",
                  paddingLeft: 35
                }}>$400</Text>
              </View>
              <Text style={{
                paddingHorizontal: 10,
                fontWeight: "bold",
                color: "#333333",
                paddingTop: 3
              }}>
                RUSSIA
              </Text>
            </TouchableOpacity>

            <View
              // onPress={()=>navigation.navigate("Detail")}
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160
              }}
            >
              <Image
                source={require('./../assets/images/5.png')} />
              <View style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingHorizontal: 10
              }}>
                <Text style={{
                  fontWeight: "bold"
                }}>ANGELICA</Text>
                <Text style={{
                  fontWeight: "bold",
                  color: "#333333",
                  paddingLeft: 45
                }}>$400</Text>
              </View>
              <Text style={{
                paddingHorizontal: 10,
                fontWeight: "bold",
                color: "#333333",
                paddingTop: 3
              }}>
                RUSSIA
              </Text>
            </View>

            <View
              // onPress={()=>navigation.navigate("Detail")}
              style={{
                height: 250,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 160
              }}
            >
              <Image
                source={require('./../assets/images/6.png')} />
              <View style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingHorizontal: 10
              }}>
                <Text style={{
                  fontWeight: "bold"
                }}>SAMANTHA</Text>
                <Text style={{
                  fontWeight: "bold",
                  color: "#333333",
                  paddingLeft: 35
                }}>$400</Text>
              </View>
              <Text style={{
                paddingHorizontal: 10,
                fontWeight: "bold",
                color: "#333333",
                paddingTop: 3
              }}>
                RUSSIA
              </Text>
            </View>

          </ScrollView>
          </View>

      </View></>
    )
}


const styles = StyleSheet.create({

  stretch: {
    width: 380,
    height: 280,
    resizeMode: 'stretch',
    marginTop: 16,
    // borderRadius: 3 
  },
});

export default Home;