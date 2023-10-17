import { View, StyleSheet, Text, FlatList } from "react-native";
import { Colors } from "../constants/colors";

function NumbersLogs({ list }) {
  return <FlatList data={list}
  renderItem={({item}) => <Text>{item}</Text>}
  keyExtractor={item => item}></FlatList>;
}

export default NumbersLogs;

const styles = StyleSheet.create({
  cardContiner: {
    marginTop: 100,
    padding: 16,
    marginHorizontal: 16,
    backgroundColor: Colors.primary300,
    borderRadius: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: "center",
  },
});
