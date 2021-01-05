import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import LinearGradient from 'react-native-web-linear-gradient';
import { SafeAreaView } from "react-navigation";
import SearchBar from "../../components/InputFields/SearchBar";
import TopCategory from "../../components/TopCategoryList";
import TopFoodList from "../../components/Listview/ProductListView";
import { navigate } from "../../utils/NavigationRef";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import HambarIcon from "../../images/hambar.png";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native-elements";
import AppButton from "../../components/Buttons/AppButton";
//Context
import { Context as UserContext } from "../../dataStore/userAccessContext";
import TopRestaurants from "../foods/TopRestaurants";

const HomeScreen = ({ navigation }) => {
  const { state, onCheckAvailability, fetchTopRestaurants } = useContext(
    UserContext
  );

  const { foods, restaurants } = state;

  /**
   * LifeCycle Methoda
   */
  useEffect(() => {
    fetchTopRestaurants();
    onCheckAvailability();
  }, []);

  /**
   * USER Actions
   */
  const didTapOptions = () => {
    // console.log("Show Options");
  };

  const goToSearchPage = () => {
    navigate("Search");
  };

  const didSelectItem = (item) => {
    navigate("ProductDetail", item);
  };

  const didSelectRestaurant = (item) => {
    navigate("RestaurantDetail", item);
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <View>
        <View style={styles.searchOptions}>
          <SearchBar didTouch={() => goToSearchPage()} isHome={true} />
          <TouchableOpacity onPress={() => didTapOptions()}>
            <Image style={styles.imgIcon} source={HambarIcon} />
          </TouchableOpacity>
        </View>
          <TopCategory style={styles.topCategory} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.choiceView}>
            <Text h4 style={styles.choiceText}>
              Top Products
            </Text>
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
              source={require("../../images/ikweto.jpg")}
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
            {/* <AppButton
              title="Add"
              width={70}
              onTap={() => alert("added")}
            /> */}
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
              source={require("../../images/kadashian.jpg")}
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

              source={require("../../images/dress2.jpg")}
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
              source={require("../../images/dress1.jpg")}
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
          {restaurants == undefined ? (
        
            <View
              style={{
                height: 240,
                width: "95%",
                borderRadius: 20,
                backgroundColor: "#D6D6D6",
                alignSelf: "center",
              }}
            >
              
            </View>
          ) : (
            <TopRestaurants
              restaurants={restaurants}
              size={"medium"}
              horizontal={true}
              didSelectItem={didSelectRestaurant}
            />
          )} 

          <View style={styles.choiceView}>
            <Text h4 style={styles.choiceText}>
              New Products
            </Text>
          </View>
         
          {/* {foods == undefined ? ( */}
            <View
              style={{
                height: 240,
                width: "95%",
                borderRadius: 20,
                backgroundColor: "#D6D6D6",
                alignSelf: "center",
              }}
            >
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
              source={require("../../images/ikweto.jpg")}
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
              onPress={() =>navigation.navigate('cart')}
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
              source={require("../../images/kadashian.jpg")}
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
              source={require("../../images/dress2.jpg")}
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
              source={require("../../images/dress1.jpg")}
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
              </View>
               

          {/* ) : (
            <TopFoodList
              foods={foods}
              size={"medium"}
              horizontal={true}
              didSelectItem={didSelectItem}
            />
          )} */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgIcon: {
    width: 50,
    height: 30,
  },
  searchOptions: {
    display: "flex",
    height: 60,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  topCategory: {
    height: 100,
    backgroundColor: "#CACACA",
  },
  choiceView: {
    height: 40,
    marginLeft: 10,
    marginRight: 30,
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 0.2,
    justifyContent: "flex-start",
  },
  choiceText: {
    fontWeight: "700",
    color: "#f15b5d",
  },
});

HomeScreen.navigationOptions = () => {
  return {
    header: null,
    tabBarLabel: "MyHome",
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    ),
  };
};

export default HomeScreen;
