import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Viewscreen(props) {
  const index = props.route.params.index;
  const data = props.contactList[index];

  return (
    <View style={styles.container}>
      <View style={styles.mainDetail}>
        <Image source={{ uri: data.image }} style={styles.pics} />
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{data.name}</Text>
        <Text style={styles.caption}>{data.phoneNumber}</Text>
      </View>
      <View style={styles.otherDetail}>
        <Text style={styles.caption}>OTHER DETAILS</Text>
        <View style={styles.detail}>
          <Text style={styles.caption}>Phone Number</Text>
          <Text style={styles.body}>{data.phoneNumber}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.caption}>Email Address</Text>
          <Text style={styles.body}>{data.email}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.caption}>Address</Text>
          <Text style={styles.body}>{data.address}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.caption}>Company</Text>
          <Text style={styles.body}>{data.company}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.caption}>Category</Text>
          <Text style={styles.body}>{data.category}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  mainDetail: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: "#f2f2f2"
  },
  pics: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#ccc",
    marginBottom: 20
  },
  caption: {
    fontSize: 15,
    color: "#ccc",
    marginBottom: 5
  },
  body: {
    fontSize: 20
  },
  otherDetail: {
    padding: 20
  },
  detail: {
    marginTop: 20
  }
});
