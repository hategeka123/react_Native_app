import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text, Input } from 'react-native-elements';
import { Context as ProductContext } from '../../dataStore/userAccessContext';
import UploadProduct from '../../components/InputFields/UploadProduct';
import Overlay from '../../components/Overlay';

const SignupScreen = () => {
  const { state, addProduct } = useContext(ProductContext);
  const [isLoading, setIsLoading] = useState(false);

  const { msg } = state;

  useEffect(() => {
    setIsLoading(false);
  }, [msg]);

  return (
    <SafeAreaView style={styles.contentView} forceInset={{ top: 'always' }}>
      <Overlay isShow={isLoading} />
      <View style={styles.titleView}>
        <Text h4> Add New Product</Text>
      </View>
      <View style={styles.listView}>
        <UploadProduct
          isSignup={true}
          onSubmit={({ name, description, price, images }) => {
            setIsLoading(true);
            addProduct({ name, description, price, images });
          
          }}
          route="HomeScreen"
          title="Upload"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentView: {
    backgroundColor: '#F2F2F2',
    flex: 1,
    justifyContent: 'space-between',
  },
  titleView: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  listView: {
    paddingTop: 9,
    flex: 6,
  },
  bottomView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
});

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen;





// import React, { useContext } from "react";
// import { View, StyleSheet } from "react-native";
// import { SafeAreaView } from "react-navigation";
// import { Text } from "react-native-elements";

// import FoodListView from "../../components/Listview/ProductListView";

// const OfferScreen = ({ navigation }) => {
//   const onTapItem = (item) => {
//     console.log(`Selected Item: ${item}`);
//   };

//   return (
//     <SafeAreaView
//       style={{ backgroundColor: "#F2F2F2" }}
//       forceInset={{ top: "always" }}
//     >
//       <View>
//         <View style={styles.searchOptions}>
//           <Text h4> Available Offers</Text>
//         </View>
//         <FoodListView
//           style={{ flex: 1 }}
//           size={"small"}
//           didSelectItem={onTapItem}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   imgIcon: {
//     width: 40,
//     height: 50,
//   },
//   searchOptions: {
//     display: "flex",
//     height: 60,
//     justifyContent: "space-around",
//     flexDirection: "row",
//     alignItems: "center",
//     marginLeft: 10,
//   },
//   topCategory: {
//     height: 100,
//     backgroundColor: "green",
//   },
// });

// OfferScreen.navigationOptions = () => {
//   return {
//     header: null,
//   };
// };

// export default OfferScreen;
