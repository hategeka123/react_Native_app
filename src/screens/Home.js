import React from "react";
import {
    View, 
    Text,
    StyleSheet,
    Image,
    ImageBackground

    } from "react-native";
import LinearGradient from 'react-native-web-linear-gradient';
import { TextInput, ScrollView, TouchableOpacity } from "react-native-gesture-handler";        
const Home = ({ navigation }) => {
  return(
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
    }}>
      <View style={{
        backgroundColor:"#00a46c",
        height:"28%",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        paddingHorizontal:20,
      }}>
        <Image
             source={require("../images/logo.jpg")}
             style={{
               height:40,
               width:50,
               marginTop:20,
             }} 
        />
        <View style={{
          flexDirection:"row",
          alignItems:"center",
          marginTop:15,
          width:"100%",
        }}>
          <View style={{width:"50%"}}>
            <Text style={{
              fontSize:28,
              color:"#FFF",
              fontWeight:"bold",
            }}> Hi Shop</Text>
          </View>
          <View style={{width:"50%", alignItems:"flex-end"}}>
              <Image
                  source={require("../images/ecommerce-tools.png")}
                  style={{width:50, height:40}}
              />
          </View>
        </View>
      </View>
      <LinearGradient
       colors={["green"]}
       style={{
         left:0,
         right:0,
         height:90,
         marginTop:-45,
       }}
      > 
      <View style={{
        backgroundColor:"#FFF",
        paddingVertical:8,
        paddingHorizontal:20,
        marginHorizontal:20,
        borderRadius:15,
        marginTop:40,
        flexDirection:"row",
        alignItems:"center",
      }}>
       <TextInput
            placeholder="Search"
            placeholderTextColor="#b1e5d3"
            style={{
              fontWeight:"bold",
              fontSize:18,
              width:260,
            }}
       />
       <Image
           source={require("../images/search.png")}
           style={{height:20, width:20}}
       />
      </View>
    </LinearGradient>

      <View style={{
        flexDirection:"row",
        alignItems:"center",
      }}>
      <View style={{width:"80%", alignItems:"flex-end"}} >
            <View style={{
              backgroundColor:"#00a46c",
              paddingHorizontal:15,
              paddingVertical:5,
              // borderRadius:15,
            }}>
              <Text 
                onPress={() =>navigation.navigate('Signin')}
              style={{
                fontWeight:"bold",
                fontSize:13,
                color:"#FFF",
              }}>Login</Text>

            </View>
      </View>
      <View style={{width:"80%", alignItems:"flex-start"}} >
            <View style={{
              backgroundColor:"#00a46c",
              // paddingHorizontal:15,
              paddingVertical:5,
              
              // borderRadius:15,
            }}>
              <Text
                onPress={() =>navigation.navigate('Signup')} 
              style={{
                fontWeight:"bold",
                fontSize:13,
                color:"#FFF",
              }}>SignUp</Text>

            </View>
            
      </View>
      </View>
      

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{height:400}}
      >
        <LinearGradient
        colors={["rgba(0,164,109,0.09)", "transparent"]}
        style={{
          position:"absolute",
          left:0,
          right:0,
          height:100,
          marginTop:220,
          top:0,
        }}
        />
        <View
          style={{
            height:250,
            elevation:2,
            backgroundColor:"grey",
            marginLeft:20,
            marginTop:20,
            borderRadius:20,
            marginBottom:10,
            width:160,
          }}
        >
          <Image
              source={require("../images/ikweto.jpg")}
              style={{height:140, width:160, borderRadius:15}}
          />
          <View style={{
            flexDirection:"row",
            paddingTop:10,
            paddingHorizontal:10,
          }}>
            <Text style={{
              fontWeight:"bold"
            }}>Nike</Text>
            <Text style={{
              fontWeight:"bold",
              color:"#FFF",
              paddingLeft:35,
            }}>40000Frw</Text>
          </View>
          <View style={{
            flexDirection:"row",
            paddingTop:10,
            paddingHorizontal:10,
          }}>
            <Text style={{
              fontWeight:"bold"
            }}>Rassia</Text>
            <Text 
              onPress={() =>navigation.navigate('Order')}
            style={{
              fontWeight:"bold",
              color:"#FFF",
              paddingLeft:35,
            }}>Detail</Text>
          </View>
          
        </View>

        <View
           
          style={{
            height:250,
            elevation:2,
            backgroundColor:"grey",
            marginLeft:20,
            marginTop:20,
            borderRadius:20,
            marginBottom:10,
            width:160,
          }}
        >
          <Image
              source={require("../images/kadashian.jpg")}
              style={{height:140, width:160, borderRadius:15}}
          />
          <View style={{
            flexDirection:"row",
            paddingTop:10,
            paddingHorizontal:10,
          }}>
            <Text style={{
              fontWeight:"bold"
            }}>Kadash</Text>
            <Text style={{
              fontWeight:"bold",
              color:"#FFF",
              paddingLeft:35,
            }}>80000Frw</Text>
          </View>

          <View style={{
            flexDirection:"row",
            paddingTop:10,
            paddingHorizontal:10,
          }}>
            <Text style={{
              fontWeight:"bold"
            }}>Amercan</Text>
            <Text 
            onPress={() =>navigation.navigate('OrderProduct')}
            style={{
              fontWeight:"bold",
              color:"#FFF",
              paddingLeft:35,
            }}>Detail</Text>
          </View>
          
          
        </View>
        <View
          style={{
            height:250,
            elevation:2,
            backgroundColor:"grey",
            marginLeft:20,
            marginTop:20,
            borderRadius:20,
            marginBottom:10,
            width:160,
          }}
        >
          <Image
              source={require("../images/dress2.jpg")}
              style={{height:150, width:160, borderRadius:15}}
          />
          <View style={{
            flexDirection:"row",
            paddingTop:10,
            paddingHorizontal:10,
          }}>
            <Text style={{
              fontWeight:"bold"
            }}>dress</Text>
            <Text style={{
              fontWeight:"bold",
              color:"#FFF",
              paddingLeft:35,
            }}>15000Frw</Text>
          </View>
          <View style={{
            flexDirection:"row",
            paddingTop:10,
            paddingHorizontal:10,
          }}>
            <Text style={{
              fontWeight:"bold"
            }}>Amercan</Text>
            <Text 
              onPress={() =>navigation.navigate('OrderProduct')}
            style={{
              fontWeight:"bold",
              color:"#FFF",
              paddingLeft:35,
            }}>Detail</Text>
          </View>
          
        </View>
        <View
          style={{
            height:250,
            elevation:2,
            backgroundColor:"grey",
            marginLeft:20,
            marginTop:20,
            borderRadius:20,
            marginBottom:10,
            width:160,
          }}
        >
          <Image
              source={require("../images/lunch.jpg")}
              style={{height:150, width:160, borderRadius:15}}
          />
          <View style={{
            flexDirection:"row",
            paddingTop:10,
            paddingHorizontal:10,
          }}>
            <Text style={{
              fontWeight:"bold"
            }}>Dress</Text>
            <Text style={{
              fontWeight:"bold",
              color:"#FFF",
              paddingLeft:35,
            }}>20000Frw</Text>
          </View>
          <View style={{
            flexDirection:"row",
            paddingTop:10,
            paddingHorizontal:10,
          }}>
            <Text style={{
              fontWeight:"bold"
            }}>Amercan</Text>
            <Text
              onPress={() =>navigation.navigate('OrderProduct')} 
             style={{
              fontWeight:"bold",
              color:"#FFF",
              paddingLeft:35,
            }}>Detail</Text>
          </View>
          
        </View>
      </ScrollView>
        {/* <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style ={{marginTop:-100}}
          >
            <Image
            source={require("../images/lunch.jpg")}
            style={{marginTop:20, marginHorizontal:4}}
            />
            
          </ScrollView>
        </View> */}
    </View>
   
  )
}

export default Home;