import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

function GameScreen({ number }) {
  let [minBoundery, setMin] = useState(1);
  let [maxBoundery, setMax] = useState(100);
  function guessNumber() {
    return Math.floor(
      Math.random() * (maxBoundery - minBoundery) + minBoundery
    );
  }
  const [guessedNumber, setGuessedNumber] = useState(guessNumber());
  const [gameOver, setGameOver] = useState(false);
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
      console.log("high");
      setMax(guessedNumber);
    } else {
      console.log("low");
      setMin(guessedNumber);
    }
    setGuessedNumber(guessNumber());
  }
  console.log(maxBoundery, minBoundery);
  console.log(number, guessedNumber, gameOver);
  if (number == guessedNumber) {
    setGameOver(true);
  }
  return (
    <View style={styles.conteiner}>
      <Title>Computer Guessed Number</Title>
      <Title>My Guess: {guessedNumber}</Title>
      <View style={styles.buttonsConteiner}>
        <PrimaryButton onPress={guessAgain.bind(this, "high")}>
          Is It High?
        </PrimaryButton>
        <PrimaryButton onPress={guessAgain.bind(this, "low")}>
          Is It Low?
        </PrimaryButton>
      </View>
      {gameOver ? <Text>Game Over</Text> : <Text>Game is on</Text>}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  conteiner: {
    padding: 20,
  },
  buttonsConteiner: {
    flexDirection: "row",
  },
});
