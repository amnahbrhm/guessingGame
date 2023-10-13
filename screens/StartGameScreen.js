import { View, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.continer}>
            <TextInput style={styles.inputText} maxLength={2} keyboardType='number-pad' textAlign='center'></TextInput>
            <View style={styles.buttonContenier}>
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>)
}

export default StartGameScreen



const styles = StyleSheet.create({
    continer: {
        marginTop: 100,
        padding: 16,
        marginHorizontal: 16,
        backgroundColor: '#d0ebf9',
        borderRadius: 16,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height:2},
        shadowRadius: 2,
        shadowOpacity: 0.1,
        alignItems: 'center'
    },
    buttonContenier: {
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    inputText: {
        fontSize: 30,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: '#319dc4',
        paddingVertical: 8,
        height: 50,
        color: '#319dc4',
        width: 50
    }
});
