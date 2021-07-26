import React from 'react';
import { StyleSheet, View, Text } from 'react-native'; 
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import  { Ionicons } from '@expo/vector-icons'; 

import ShopNavigator from '../shop';
import CartNavigator from '../cart';

const TabStack = createBottomTabNavigator();

const TabNavigator = () => {
return (
<TabStack.Navigator 
    initialRouteName="Shop" 
    tabBarOptions={{
        showLabel: false,
        style: {
           ...styles.tabBar,
           ...styles.shadow,
        }
    }}
    >

<TabStack.Screen 
name="Shop" 
component={ShopNavigator}
options={{
    tabBarIcon: ({focused}) => (<View style={styles.item}>
        <Ionicons name="md-home"  color="black" size={24}/>
        <Text>Tienda</Text>
    </View>)
}}

/>
<TabStack.Screen name="Cart" component={CartNavigator}options={{
    tabBarIcon: ({focused}) => (<View style={styles.item}>
        <Ionicons name="md-cart"  color="black" size={24}/>
        <Text>Carrito</Text>
    </View>)
}}/>
    </TabStack.Navigator>
)
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 70,
    },
    shadow: {
        shadowColor: '#7f6df0',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
});
export default TabNavigator;
