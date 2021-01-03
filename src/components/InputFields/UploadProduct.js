import React, { useState } from "react";
import { View, StyleSheet, Alert, ImagePickerIOS } from "react-native";
import { Input, Button } from "react-native-elements";
import ImagePicker, { launchImageLibrary } from "react-native-image-picker";
import AppButton from "../Buttons/AppButton";
import { navigate } from "../../utils/NavigationRef";


const Spacer = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};

const UploadProduct = ({ onSubmit, route, linkText, title, isSignup = false }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState("");

  const handleChoosePhoto = () => {
    const options = {};
    ImagePicker.showImagePicker(options, (response) =>{
      console.log(response)
    })
    // ImagePicker.launchImageLibrary(options, response => {
    //     console.log("response", response)
    //   });
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
            {/* <Input
              placeholder="Image ..."
              type="file"
              autoCapitalize={false}
              autoCorrect={false}
              onChangeText={setImages}
            /> */}
            <Button

          titleStyle={styles.upload}
          type="clear"
          title="Choose Image"
          onPress={handleChoosePhoto}
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
