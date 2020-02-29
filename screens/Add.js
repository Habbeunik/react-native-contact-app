import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
  Button
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Addscreen(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [image, setImage] = React.useState(null);

  function handleSubmit() {
    props.onSubmit({
      email,
      name,
      company,
      address,
      phoneNumber,
      category,
      image
    });
    props.navigation.navigate("ContactList");
  }


  function triggerImagePicker() {
    ImagePicker.launchImageLibraryAsync().then(({ uri }) => {
      setImage(uri)
    }) 
  }

  function pickImage() {
    ImagePicker.getCameraPermissionsAsync().then(({ status }) => {
      if (status !== "granted") {
        ImagePicker.requestCameraPermissionsAsync().then(({ status}) => {
          if(status === 'granted') {
            triggerImagePicker()
          }
        })
      }else {
        triggerImagePicker()
      }
    });
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }} >
        <View style={styles.imagePicker}>
          {image ? (
            <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} />
          ) : (
            <Button title='Pick Image' onPress={pickImage} />
          )}
        </View>
        <TextInput
          placeholder="FullName"
          onChangeText={setName}
          value={name}
          style={styles.input}
        />

        <TextInput
          placeholder="Address"
          onChangeText={setAddress}
          value={address}
          style={styles.input}
        />
        <TextInput
          placeholder="Company"
          onChangeText={setCompany}
          value={company}
          style={styles.input}
        />
        <TextInput
          placeholder="PhoneNo"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          style={styles.input}
        />
        <TextInput
          placeholder="Category"
          onChangeText={setCategory}
          value={category}
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <View>
          <Text style={styles.buttonText}> Create Contact 👍🏾</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePicker: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#ccc",
    marginBottom: 20,
    overflow: 'hidden',
    marginTop: 20
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between"
  },
  input: {
    margin: 30,
    marginBottom: 0,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    width: '90%'
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
    borderRadius: 45,
    marginBottom: 25,
    backgroundColor: "black",
    padding: 15,
    alignSelf: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 18
  }
});
