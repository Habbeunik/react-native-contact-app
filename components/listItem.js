import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const ListItem = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.contactList}>
        <View style={styles.profile}>
          <Image source={{ uri: props.image }} style={styles.profileImage} />
        </View>
        <View style={styles.content}>
          <Text style={styles.contactTitle}>{props.name}</Text>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{props.category}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contactList: {
    flexDirection: "row",
    marginHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  profile: {
    width: 60,
    height: 60,
    backgroundColor: "#ccc",
    borderRadius: 50,
    marginRight: 10,
    overflow: "hidden"
  },
  profileImage: {
    width: "100%",
    height: "100%"
  },
  tag: {
    borderRadius: 40,
    backgroundColor: "purple",
    marginTop: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start"
  },
  tagText: {
    fontSize: 11,
    color: "white"
  },
  contactTitle: {
    fontSize: 20
  },
  content: {
    // flex: 1,
  }
});

export default ListItem;
