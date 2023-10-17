import { View, StyleSheet } from "react-native";
import {Colors} from '../constants/colors'

function Card({children}) {
  return <View style={styles.cardContiner}>{children}</View>;
}

export default Card;

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
