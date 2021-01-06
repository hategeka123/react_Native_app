import React, {useEffect,useState} from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";

import { Text, Rating } from "react-native-elements";
import AppButton from "../../components/Buttons/AppButton";
// import ButtonAddRemove from "../Buttons/AddRemoveButton";

import { urlImage } from "../../utils/AppConst";

const deviceWidth = Math.round(Dimensions.get("window").width);

const Homescreen = ({size, onAddToCart}) => {
  const didAddItem = () => {
    onAddToCart();
  };

  const didRemoveItem = () => {};




const  [data, setData] = useState([])
  // const  [isloading, setIsLoading] = useState(true)


const handleChangeRole = (id) => {
alert(id)
}
  useEffect(() => {
    fetch("https://online-selling-backend.herokuapp.com/food")
    .then((res) => res.json())
    .then((json) =>{
      console.log(json)
      setData(json)
    })
    .catch((error)=> console.log(error))
  },[])

  const mediumCard = () => {
    return (
      <View style={styles.root}>
        <ScrollView vertocal={true}>
        {data.map((food) => (
          <View style={styles.foodCard}>
              <View style={styles.imageCard}></View>
              <View style={styles.foodImageSmall}>
              <Text style={styles.title}>{food.name}</Text>
              <Text style={styles.title}>{food.price}Rw</Text>   
              </View>
              <View>
                  <AppButton
                  onPress={ () => this.submitNewCustomer()}
                  title="Add"
                  width={70}
                  // onPress={() => navigate("Order")}
                  // onTap={() => onAddToCart(data.item)}
                />
              </View>
          </View>
        ))}
        </ScrollView>
      </View>
    );
  };

  const smallCard = () => {
    return (
      
      <TouchableOpacity
        style={smallStyles.smallCard}
        onPress={() => onSelect(item)}
        disabled={disable}
      >
      {data.map((food) => (
        <View>
       <Image style={smallStyles.foodImageSmall} source={{ uri: food.image }} />
        <View style={smallStyles.productInfo}>
          <Text style={smallStyles.title}>{food.name}</Text>
          <Text style={smallStyles.resturentTitle}>
            {/* {category.toString().toUpperCase()} */}
          </Text>
          <Rating
            style={smallStyles.rating}
            type="heart"
            readonly
            ratingCount={5}
            imageSize={20}
          />
        </View>
        <View style={smallStyles.shopView}>
          <Text style={smallStyles.productSize}>Fr{food.price}</Text>
          {/* {data !== undefined &&
            data.map((item) => {
              if (item.food._id.toString() === _id.toString()) {
                isAdded = true;
                currentQty = item.qty;
              }
            })} */}
          {canAdd && !isAdded && (
            <AppButton
              title="Add"
              width={70}
              // onPress={() => myArray.push(data.item)}
              onTap={() => onAddToCart(data.item)}
            />
          )}

          {isAdded && (
            <View style={styles.countView}>
              <ButtonAddRemove
                title="-"
                onTap={() => didAddRemove(item, --currentQty)}
              />

              <Text
                h4
                style={{ alignSelf: "center", margin: 5, fontWeight: "600" }}
              >
                {currentQty}
              </Text>
              <ButtonAddRemove
                title="+"
                onTap={() => didAddRemove(item, ++currentQty)}
              />
            </View>
          )}
        </View>
      ))
      </View>
      ))}
      </TouchableOpacity>
      
    );
  };

  switch (size) {
    case "small": // wide card
      return smallCard();
    case "medium": // medium card
      return mediumCard();
    default:
      return mediumCard();
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
  },
  imageCard:{
   width:120,
   height:100,
   marginRight:5,
   backgroundColor: "#581845",
   borderRadius: 20,
  },
  foodCard:{
  display:"flex",
  marginBottom:10,
  marginRight:5,
  marginLeft:10,
  flexDirection:"row",
   flex:1,
   width:deviceWidth - 10,
   justifyContent:"space-between",
  //  marginLeft:20
  },
  foodImage: {
    borderRadius: 20,
    height: 220,
    // width: deviceWidth - 30,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#581845",
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 10,
    color: "#636363",
  },
  countView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 8,
  },
});

const smallStyles = StyleSheet.create({
  smallCard: {
    flex: 1,
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: "500",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  resturentTitle: {
    fontSize: 16,
    display: "flex",
    color: "#565555",
  },
  price: {
    fontSize: 18,
    fontWeight: "400",
    display: "flex",
    color: "#EA5656",
  },
  foodImageSmall: {
    borderRadius: 10,
    marginLeft:10,
    height: 99,
    width: 99,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#581845",
    alignSelf: "center",
  },
  rating: {
    alignSelf: "flex-start",
  },
  productInfo: {
    flex: 1,
    padding: 5,
    justifyContent: "space-around",
  },
  shopView: {
    justifyContent: "space-around",
    padding: 10,
    alignItems: "center",
  },
  productSize: {
    fontSize: 20,
    fontWeight: "600",
    color: "#848484",
  },
});

export default Homescreen;
