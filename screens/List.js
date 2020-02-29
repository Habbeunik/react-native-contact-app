import React from "react";
import { StyleSheet, View, TouchableOpacity, FlatList, Text } from "react-native";
import ListItem from "../components/listItem";
import { Icon } from "native-base";
// import {} from "native-base";

export default function Listscreen(props) {
  function goToAddScreen() {
    props.navigation.navigate("AddContact");
  }

  function gotToViewScreen(index) {
    props.navigation.navigate("ContactView", {
      index
    });
  }

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={props.contactList}
          renderItem={({ item, index }) => (
            <ListItem
              name={item.name}
              category={item.category}
              image={item.image}
              onPress={() => gotToViewScreen(index)}
            />
          )}
          ListEmptyComponent={() => <Text>No Contact right now</Text>}
        />
      </View>
      <View style={styles.floatButton}>
        <TouchableOpacity onPress={goToAddScreen}>
          <Icon
            name="add"
            type="MaterialIcons"
            style={{ fontSize: 24, color: "white" }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "white"
  },
  floatButton: {
    position: "absolute",
    bottom: 100,
    right: 20,
    width: 70,
    height: 70,
    borderRadius: 50,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple"
  }
});
