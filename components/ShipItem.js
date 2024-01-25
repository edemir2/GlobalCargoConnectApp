import { View, Pressable, Text, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ShipItem({ id, title, imageUrl, availableSpace, departure, destination }) {
    const navigation = useNavigation();

    function selectShipItemHandler() {
        navigation.navigate('ShipDetail', {
            shipId: id
        });
    }


    return (
        <View style={styles.shipItem}>
            <Pressable 
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
                onPress={selectShipItemHandler}
            >
                <View>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{ title }</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{availableSpace}</Text>
                        <Text style={styles.detailItem}>{departure.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{destination.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

export default ShipItem;

const styles = StyleSheet.create({
    shipItem: {
        margin: 16,
        borderRadius: 8,
        overdlow: Platform.OS === 'android' ? 'hidden': 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: {width: 0, height: 2 },
        shadowRadius: 16,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '%100',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        margin: 8,
    },
    details: {
        padding: 18,

    },
    detailItem: {
        marginHorizontal: 4,
        marginVertical: 12,
        fontSize:12,
    }
});