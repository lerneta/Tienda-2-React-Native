import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BreadDetailScreen from "../../screens/BreadDetailScreen";
import CategoriesScreen from '../../screens/CategoriesScreen';
import CategoryBreadScreen from '../../screens/CategoryBreadScreen';
import CartScreen from '../../screens/CartScreen';
import Colors from '../../constants/colors';

const  cartStack = createStackNavigator();

const CartNavigator = () => (
  <cartStack.Navigator
    initialRouteName="Cart"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    }}
  >
   
    <cartStack.Screen
      name="Cart"
      component={CartScreen}
      options={{ title: 'Carrito' }}
    />
  </cartStack.Navigator>
);

export default CartNavigator;