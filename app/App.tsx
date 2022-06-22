import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppProvider, { AppContext } from './stores/AppProvider';
import HomeScreen from './screens/Home/Home.screen';
import AboutScreen from './screens/About/About.screen';
import ProductScreen from './screens/Product/Product.screen';
import ProductFilterScreen from './screens/ProductFilter/ProductFilter.screen';
import CartScreen from './screens/Cart/Cart.screen';
import PaymentScreen from './screens/Payment/Payment.screen';
import PaymentResultScreen from './screens/PaymentResult/PaymentResult.screen';
import FeedScreen from './screens/Feed/Feed.screen';
import ProfileScreen from './screens/Profile/Profile.screen';
import LoginScreen from './screens/Login/Login.screen';
import BindingScreen from './screens/Binding/Binding.screen';
import COLORS from './assets/styles/Colors';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: COLORS.BLACK },
          }}
          initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Binding"
            component={BindingScreen}
            options={{ title: 'Bind Dana Account', headerShown: true }}
          />
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
            name="ProductFilter"
            component={ProductFilterScreen}
            options={{ title: 'Product Country', headerShown: true }}
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
    </AppProvider>
  );
};

export default App;
