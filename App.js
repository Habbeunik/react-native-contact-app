import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Listscreen from "./screens/List";
import Viewscreen from "./screens/View";
import Addscreen from "./screens/Add";

const Stack = createStackNavigator();

export default function App() {
  const [contactList, setContactList] = React.useState([]);

  function updateContactList(newContact) {
    setContactList(prevContactList => [...prevContactList, newContact]);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen
          name="ContactList"
          component={props => (
            <Listscreen {...props} contactList={contactList} />
          )}
        />
        <Stack.Screen
          name="AddContact"
          component={props => (
            <Addscreen {...props} onSubmit={updateContactList} />
          )}
        />
        <Stack.Screen
          name="ContactView"
          component={props => (
            <Viewscreen
              {...props}
              contactList={contactList}
            />
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
