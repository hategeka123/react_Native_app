
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { navigate } from '../utils/NavigationRef';
 
export default function App() {
  const  [data, setData] = useState([])
  const  [isloading, setIsLoading] = useState(true)


const handleChangeRole = (id) => {
alert(id)
}
  useEffect(() => {
    fetch("https://online-selling-backend.herokuapp.com/admin/all-users")
    .then((res) => res.json())
    .then((json) =>{
      console.log(json.users)
      setData(json)
    })
    .catch((error)=> console.log(error))
    .finally(() => setIsLoading(false))
  },[])
  return (
    <View style={styles.container}>
      {isloading ? <Text>Is Loading ... </Text> : (
      <View style={{ flex: 1, flexDirection: 'column', marginTop:20, justifyContent:  'center'}}>
          {data.users.map((user, index) => (
          <View key={index} style={styles.singleUser}>
          <Text style={{marginBottom:10, fontSize:20}}>Names: {user.firstName}{ user.lastName}</Text>
          {/* <Text> Your cart</Text>
          <View>{user.cart.map((item) =>(<Text> Cart ID: {item._id}</Text>))}</View> */}
          <View><Text>{user.order.length > 0 ? (<Text>Products you ordered</Text>):(<Text>Odered Products: {user.order.length}</Text>)
          // map((item) =>(<Text> Cart ID: {item._id}</Text>))
          }
          </Text>
          </View>
          </View>
          ))}
    
         
        </View>
        )}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginLeft: 15,
    justifyContent: 'center',
  },
  singleUser: {
    width:"90%",
     marginBottom:20,
      padding:10,
      borderBottomWidth: 2
  }
});