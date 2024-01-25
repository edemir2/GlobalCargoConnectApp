import { View, Text, StyleSheet } from "react-native";

function Subtitle2() {
    return (
        <View style={styles.subtitle2Container}>
                <Text style={styles.subtitle2}>Explanation</Text>
        </View>
    )
}
export default Subtitle2;

const styles = StyleSheet.create({
    subtitle2: {
        color: '#1c1c1c',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 14,
    },
    subtitle2Container: {
        padding: 2,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '1c1c1c',
        borderBottomWidth: 2,
    }
})