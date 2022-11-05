import React from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

let ViewPatient = null;

const patients = [
  {
    id: "1",
    name: "Earnest Green",
    age: 56
  },
  {
    id: "2",
    name: "Winston Orn",
    age: 70
  },
  {
    id: "3",
    name: "Carlton Collins",
    age: 66
  },
  {
    id: "4",
    name: "Malcolm Labadie",
    age: 72
  },
  {
    id: "5",
    name: "Michelle Dare",
    age: 68
  },
];

export default ViewPatient = ({ navigation }) => {

  const ItemSeparator = () => {
    return <View style={{
      height: 1,
      backgroundColor: "#d68227",
      marginHorizontal: 10
    }}
    />;
  };

  const ListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.item}>No data found</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={patients}
        renderItem={({ item }) =>
          <TouchableWithoutFeedback onPress={() => navigation.navigate("AddTestDetails")}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableWithoutFeedback>}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={ListEmpty}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    fontSize: 30,
  },
  item: {
    padding: 10,
    marginTop: 5,
    fontSize: 20,
  },
});