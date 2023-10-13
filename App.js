import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient style={styles.continer} colors={['#8ebed4', '#d0ebf9']}>
      <ImageBackground source={require('./assets/images/background.jpg')} 
      resizeMode="cover" 
      style={styles.continer} 
      imageStyle={styles.image}>
        <StartGameScreen></StartGameScreen>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  continer: {
    flex: 1
  },
  image: {
    opacity: 0.2
  }
});
