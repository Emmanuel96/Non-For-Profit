import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/auth/login';
import GrantFormScreen from './pages/grants/grantFormScreen';
import HomeScreen from './pages/home/home';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import ExpensesFormScreen from './pages/expenses/expensesFormScreen'; // Updated path
import ViewGrantScreen from 'pages/grants/viewGrant';

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();

export default function App() {
  const [initialState, setInitialState] = useState(); // Updated initialState to null

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer ref={navigationRef} initialState={initialState}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='login' component={LoginScreen} />
          <Stack.Screen name='home' component={HomeScreen} />
          <Stack.Screen name='grant_form' component={GrantFormScreen} />
          <Stack.Screen name='expense_form' component={ExpensesFormScreen} />
          <Stack.Screen name='grant_detail' component={ViewGrantScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
