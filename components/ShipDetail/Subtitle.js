import { View, Text, StyleSheet } from "react-native";

function Subtitle() {
    return (
        <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Info</Text>
        </View>
    )
}
export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: '#1c1c1c',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 2,
        marginTop: 4,
    },
    subtitleContainer: {
        padding: 4,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '1c1c1c',
        borderBottomWidth: 2,
    }
})