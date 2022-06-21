import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home/Home.screen';
import AboutScreen from './screens/About/About.screen';
import ProductScreen from './screens/Product/Product.screen';
import CartScreen from './screens/Cart/Cart.screen';
import PaymentScreen from './screens/Payment/Payment.screen';
import PaymentResultScreen from './screens/PaymentResult/PaymentResult.screen';
import FeedScreen from './screens/Feed/Feed.screen';
import ProfileScreen from './screens/Profile/Profile.screen';
import COLORS from './assets/styles/Colors';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: COLORS.BLACK },
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Feed"
          component={FeedScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="PaymentResult"
          component={PaymentResultScreen}
          options={{ title: 'Payment Result', headerShown: true }}
        />
        <Stack.Screen name="*" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
