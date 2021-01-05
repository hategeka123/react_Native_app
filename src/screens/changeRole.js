import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function changeRole() {
    const  [data, setData] = useState([])
  const  [isloading, setIsLoading] = useState(true)

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
        <div>
        <Text> user Role</Text>
        </div>
    )
}

export default changeRole
