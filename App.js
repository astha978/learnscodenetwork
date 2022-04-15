import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,Image ,Loader,ActivityIndicator } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
//import { db, storage } from './src/config/firebase'
//import {ref, uploadBytes, get, getDownloadURL} from 'firebase/storage';
//import {doc, serverTimestamp} from 'firebase/firestore';
//import { collection, addDoc } from "firebase/firestore"; 
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