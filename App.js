import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from './screens/CategoriesScreen';
import ShipsOverviewScreen from './screens/ShipsOverviewScreen';
import ShipDetailScreen from './screens/ShipDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='dark' />
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {backgroundColor: '#008b8b'},
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#ffffff' },
        }}
      >
        <Stack.Screen name="ShipsCategories" 
        component={CategoriesScreen} 
        options={{
          title: 'Welcome to the Ship App',
        }}
        />
        <Stack.Screen name="ShipsOverview" 
        component={ShipsOverviewScreen} 
        options={{
          title: 'Available Ships',
        }}/>
        <Stack.Screen 
        name='ShipDetail' 
        component={ShipDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
