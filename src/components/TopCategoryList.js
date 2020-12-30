import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CategoryItem from "./CategoryItem";
import OfferIcon from "../images/ikweto.jpg";
import BurgerIcon from "../images/kadashian.jpg";
import PizzaIcon from "../images/ecommerce-tools.png";
import CoffeeIcon from "../images/dress2.jpg";
import LunchIcon from "../images/signup.jpg";

const categories = [
  { id: 1, name: " Boy'sShoes", image: OfferIcon },
  { id: 2, name: "Girls'sshoes", image: BurgerIcon },
  { id: 3, name: "Trousers", image: PizzaIcon },
  { id: 4, name: "Dresses", image: CoffeeIcon },
  { id: 5, name: "Drinks", image: LunchIcon },
];

const TopCategory = () => {
  // onSelect = (item) => {
  //   console.log("Selected Item is", item);
  // };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={(item) => <CategoryItem data={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TopCategory;
