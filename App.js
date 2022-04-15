import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PdfListScreen from './src/screens/PdfListScreen';
import particularPdf from './src/screens/particularPdf';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="Home">
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen name="Pdf-List" component={PdfListScreen} />
        <Stack.Screen name="Course-Pdf" component={particularPdf} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;