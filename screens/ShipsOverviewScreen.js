import { View, FlatList, StyleSheet } from 'react-native';

import { SHIPS } from '../data/dummy-data';
import ShipItem from '../components/ShipItem';

function ShipsOverviewScreen({ route }) {
    const catId = route.params.categoryId;

    const displayedShips = SHIPS.filter((shipItem) => {
        return shipItem.categoryIds.indexOf(catId) >= 0;
    });

    function renderShipItem(itemData) {

        const shipItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            destination: itemData.item.destination,
            departure: itemData.item.departure,
            availableSpace: itemData.item.availableSpace,
        };

        return( <ShipItem {...shipItemProps} />
        );
    }

    return (
        <View style={StyleSheet.container}>
            <FlatList 
                data={displayedShips} 
                keyExtractor={(item) => item.id} 
                renderItem={renderShipItem} 
            />
        </View>
    );
}

export default ShipsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});