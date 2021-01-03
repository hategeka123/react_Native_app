
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image, StyleSheet } from 'react-native';
import { Provider as UserProvider } from './src/dataStore/userAccessContext';

/**
 *
 * Screens
 *
 **/

import Home from './src/screens/Home';
import AuthCheckScreen from './src/screens/AuthCheckScreen';
import AccountScreen from './src/screens/user/AccountScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import CartScreen from './src/screens/shoping/CartScreen';
import OfferScreen from './src/screens/home/OffersScreen';
import SearchScreen from './src/screens/home/SearchScreen';
import SigninScreen from './src/screens/user/SigninScreen';
import SignupScreen from './src/screens/user/SignupScreen';
import { setNavigator } from './src/utils/NavigationRef';
import OrderScreen from './src/screens/shoping/OrderScreen';
import OrderDetailScreen from './src/screens/shoping/OrderDetails';
import PaymentScreen from './src/screens/shoping/PaymentScreen';
import FoodDetails from './src/screens/foods/FoodDetails';
import RestaurantDetailScreen from './src/screens/foods/RestaurantDetails';

const switchNavigator = createSwitchNavigator({
  authCheck: AuthCheckScreen,
  homeStack: createBottomTabNavigator({
    Home: {
      screen: createStackNavigator({
        TopProducts: HomeScreen,
        Search: SearchScreen,
        ProductDetail: FoodDetails,
        RestaurantDetail: RestaurantDetailScreen,
      }),
      navigationOptions: {
        tabBarOptions: {
          activeTintColor: '#f15b5d',
        },
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require('./src/images/homeIcon.png')
              : require('./src/images/homeIcon.png');
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
    Upload: {
      screen: OfferScreen,
      navigationOptions: {
        tabBarOptions: {
          activeTintColor: '#f15b5d',
        },
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require('./src/images/iconPlus.jpg')
              : require('./src/images/iconPlus.jpg');
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
    Cart: {
      screen: createStackNavigator({
        Shoping: CartScreen,
        Order: OrderScreen,
        Payment: PaymentScreen,
        OrderDetails: OrderDetailScreen,
      }),
      navigationOptions: {
        tabBarOptions: {
          activeTintColor: '#f15b5d',
        },
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true
              ? require('./src/images/cart_icon.png')
              : require('./src/images/cart_n_icon.png');
          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarOptions: {
          activeTintColor: '#f15b5d',
        },
        tabBarIcon: ({ focused, tintColor }) => {
          let img =
            focused == true
              ? require('./src/images/account_icon.png')
              : require('./src/images/account_n_icon.png');
          return <Image source={img} style={styles.tabIcon} />;
        },
      },
    },
  }),
  loginStack: {
    screen: createStackNavigator({
      WellCome: Home,
      Signin: SigninScreen,
      Signup: SignupScreen,
    }),
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        let icon =
          focused == true
            ? require('./src/images/account_icon.png')
            : require('./src/images/account_n_icon.png');
        return <Image source={icon} style={styles.tabIcon} />;
      },
    },
  },
});

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <UserProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </UserProvider>
  );
};