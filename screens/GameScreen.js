import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import NumbersLogs from "../components/NumbersLogs";
import Ionicons from "@expo/vector-icons/Ionicons";

let minBoundery = 1;
let maxBoundery = 100;
let count = 0;
function GameScreen({ number, gameOver }) {
  let [guessedNumList, setGuessedNumList] = useState([]);
  function guessNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const [guessedNumber, setGuessedNumber] = useState(guessNumber(100, 1));
  useEffect(() => {
    if (number == guessedNumber) {
      gameOver(count);
    }
  }, [guessedNumber, number, gameOver]);
  useEffect(() => {
    minBoundery = 1;
    maxBoundery = 100;
    count = 0;
  }, []);
  function guessAgain(dir) {
    if (
      (dir === "high" && guessedNumber < number) ||
      (dir === "low" && guessedNumber > number)
    ) {
      Alert.alert("Hmmm", "We all know", [
        {
          text: "Sorry",
          style: "cancel",
        },
      ]);
      return;
    }
    if (dir === "high") {
      maxBoundery = guessedNumber - 1;
    } else {
      minBoundery = guessedNumber + 1;
    }
    setGuessedNumber(guessNumber(maxBoundery, minBoundery));
    count++;
    setGuessedNumList([guessedNumber, ...guessedNumList])
  }
  return (
    <View style={styles.continer}>
      <Title>Computer Guessed Number</Title>
      <Card>
        <Title style={styles.title}>My Guess: {guessedNumber}</Title>
        <View style={styles.buttonsConteiner}>
          <PrimaryButton onPress={guessAgain.bind(this, "high")}>
            <Ionicons name="md-remove" size={18} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={guessAgain.bind(this, "low")}>
            <Ionicons name="md-add" size={18} color="white" />
          </PrimaryButton>
        </View>
        <NumbersLogs list={guessedNumList}/>
        {/* {gameOver ? <Text>Game Over</Text> : <Text>Game is on</Text>} */}
      </Card>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  continer: {
    padding: 20,
  },
  buttonsConteiner: {
    flexDirection: "row",
  },
  title: {
    borderWidth: 0,
  },
});
