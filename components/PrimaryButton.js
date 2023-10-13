import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children }) {
    return (
        <View style={styles.outterContiner}>
            <Pressable style={({pressed}) => pressed? [styles.pressed, styles.innerContiner]: styles.innerContiner} android_ripple={{color: 'white'}}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )
}


export default PrimaryButton

const styles = StyleSheet.create({
    outterContiner: {
        flex: 1,
        margin: 12,
        borderRadius: 50,
        overflow: 'hidden'
    },
    innerContiner: {
        backgroundColor: '#38677a',
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
});