import { Text, StyleSheet } from 'react-native'

function Title({children, style}){
    return <Text style={[styles.title, style]}>{children}</Text>
}

export default Title


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 2,
        marginVertical: 15,
        padding: 4
    }
})