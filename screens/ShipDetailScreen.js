import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import { SHIPS } from "../data/dummy-data";
import Subtitle from "../components/ShipDetail/Subtitle";
import Subtitle2 from "../components/ShipDetail/Subtitle2";
import List from "../components/ShipDetail/List";


function ShipDetailScreen({ route }) {
    const shipId = route.params.shipId;

    const selectedShip = SHIPS.find((ship) => ship.id === shipId);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedShip.imageUrl }}/>
            <Text style={styles.title}>{selectedShip.title}</Text>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Info</Subtitle>
                    <List data={selectedShip.features} />
                    <Subtitle2>Explanation</Subtitle2>
                    <List data={selectedShip.explanations} />
                </View>
            </View>
        </ScrollView>
    )
}

export default ShipDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '85%',
        height: 200,
        left: 27.5,
        marginVertical: 20,
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        margin:8,
        textAlign: 'center',
        color: 'black'
    },
    subtitle: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 6,
        textAlign: 'center'
    },
    listContainer: {
        width: '80%',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
    
});