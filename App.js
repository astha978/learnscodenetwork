import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import coursePdf from './src/screens/coursePdf';
import courseList from './src/screens/courseList';
//matk
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="Home">
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen name="Course-List" component={courseList} />
        <Stack.Screen name="Course-Pdf" component={coursePdf} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;