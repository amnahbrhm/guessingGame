import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";

function GameOverScreen({ number, startAgain, roundsCount }) {
  return (
    <View style={styles.conteiner}>
      <Card>
      <Title style={styles.subTitle}>Game Over</Title>
      <Title style={styles.title}>It was {number} with {roundsCount} try</Title>
        <View style={styles.button}>
          <PrimaryButton onPress={startAgain}>Start Again</PrimaryButton>
        </View>
      </Card>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  conteiner: {
    padding: 20,
  },
  title: {
    borderWidth: 0,
  },
  subTitle: {
    borderWidth: 0,
    fontSize: 18,
    paddingBottom: 0,
    marginBottom: 0
  },
  button: {
    flexDirection: "row",
    // flex: 1,
  },
});
