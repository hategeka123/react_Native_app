
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
export default function App() {
  const  [data, setData] = useState([])
  const  [isloading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("https://online-selling-backend.herokuapp.com/user/order")
    .then((res) => res.json())
    .then((json) =>{
      console.log(json)
      setData(json)
    })
    .catch((error)=> console.log(error))
    .finally(() => setIsLoading(false))
  },[])
  return (
    <View style={styles.container}>
      {isloading ? <Text>Is Loading ... </Text> : (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.name}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>{data.email}</Text>
         
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
    justifyContent: 'center',
  },
});