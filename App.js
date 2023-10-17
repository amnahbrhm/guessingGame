import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useState } from "react";
import {Colors} from './constants/colors'
export default function App() {
  const [pickedNumber, setpickedNumber] = useState();
  const [gameOver, setgameOver] = useState(false);
  const [roundsCount, setroundsCount] = useState(0);

  function handlePickedNumber(number) {
    setpickedNumber(number);
  }
  function gameOverHandler(num){
    setroundsCount(num)
    setgameOver(true)
  }
  function startAgainHandler(){
    setpickedNumber()
    setroundsCount(0)
    setgameOver(false)
  }
  let screen = <StartGameScreen onPickNumber={handlePickedNumber} />;

  if (pickedNumber) {
    screen = <GameScreen number={pickedNumber} gameOver={gameOverHandler} />;
  }
  if (gameOver && pickedNumber) {
    screen = <GameOverScreen number={pickedNumber} roundsCount={roundsCount} startAgain={startAgainHandler}/>
  }
  return (
    <LinearGradient style={styles.continer} colors={[Colors.primary500, Colors.primary300]}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.continer}
        imageStyle={styles.image}>
        <SafeAreaView >
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
  },
  image: {
    opacity: 0.2,
  },
});
