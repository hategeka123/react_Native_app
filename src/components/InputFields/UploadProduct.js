import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert, ImagePickerIOS, Platform } from "react-native";
import { Input, Button } from "react-native-elements";
import { launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from 'expo-image-picker';
import AppButton from "../Buttons/AppButton";
import { navigate } from "../../utils/NavigationRef";
import Constants from 'expo-constants'
const Spacer = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};
const UploadProduct = ({ onSubmit, route, linkText, title, isSignup = false }) => {
  const state = {
    come:""
  }
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState("");
  // const [come, setCome] = useState("")
  // const handleChoosePhoto = () => {
  //   const options = {};
  //   ImagePicker.showImagePicker(options, (response) =>{
  //     console.log(response)
  //   })
    // ImagePicker.launchImageLibrary(options, response => {
    //     console.log("response", response)
    //   });
  // };
  const handleUpload = (images) =>{
    const data = new FormData()
    data.append('file', images)
    data.append('upload_present','selling')
    data.append('cloudinary_name','andela-stackup')
    fetch('https://api.cloudinary.com/v1_1/andela-stackup/images/upload', {
      method:"POST",
      body:data
    }).then(res=> res.json())
    .then(data => {
      console.log(data.images)
    })
  };
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });
    console.log(result);
    console.log('---------------------------------------------')
    if (result) {
      // console.log(uri);
      // setCome(result.uri)
      let newfile = {
      uri:result.uri, 
      type:`test${result.uri.split(".")[1]}`,
      name:`test${result.uri.split(".")[1]}`
      }
      handleUpload(newfile)
    }
  };
  const addSignUpFields = () => {
    if (isSignup) {
      return (
        <View>
          <Spacer>
            <Input
              placeholder="Price"
              autoCapitalize={false}
              autoCorrect={false}
              onChangeText={setPrice}
            />
          </Spacer>
          <Spacer>
            <Button
          titleStyle={styles.upload}
          type="clear"
          title="Choose Image"
          onPress={pickImage}
        />
          </Spacer>
        </View>
      );
    }
  };
  return (
    <View>
      <Spacer>
        <Input
          placeholder="Name ..."
          autoCapitalize={false}
          autoCorrect={false}
          onChangeText={setName}
        />
      </Spacer>
      <Spacer>
        <Input
          placeholder="Description ..."
        //   secureTextEntry
          autoCapitalize={false}
          autoCorrect={false}
          onChangeText={setDescription}
        />
      </Spacer>
      {addSignUpFields()}
      <Spacer />
      <AppButton
        height={50}
        title={title}
        onTap={() => onSubmit({ name, description, price, images })}
      />
      <Spacer>
        <Button
          titleStyle={styles.titleStyle}
          type="clear"
          title={linkText}
          onPress={() => navigate(route)}
        />
      </Spacer>
    </View>
  );
};
const styles = StyleSheet.create({
  txtInputView: {
    marginTop: 5,
    marginBottom: 5,
  },
  spacer: {
    margin: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "400",
    color: "#f15b5d",
  },
  upload: {
    fontSize: 18,
    fontWeight: "400",
    color: "#f15b5d",
  },
});
export default UploadProduct;