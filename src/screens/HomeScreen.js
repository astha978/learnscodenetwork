import { homeStylesheet, Text, View, TouchableOpacity,Image ,Loader,ActivityIndicator } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { db, storage } from '../config/firebase';
import {ref, uploadBytes, get, getDownloadURL} from 'firebase/storage';
import {doc, serverTimestamp} from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore"; 
import React,{useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import homeStyles from '../styles/homeStyles';


const Stack = createNativeStackNavigator();

const HomeScreen=({navigation})=>{
  const [category,setSelectedCategory] = useState(null)
  const [loading,setLoading] = useState(false)
  const buttonPressed = ()=>{
    DocumentPicker.getDocumentAsync({type:"application/pdf"})
    .then((value)=>{
      const storageRef = ref(storage,`/docs/${value.name}`)
        setLoading(true)
        uploadBytes(storageRef,value.uri).then(async(snapshot)=>{
          const url = await getDownloadURL(storageRef)
          const data ={
            url:url,
            date:serverTimestamp(),
            name:value.name
          }
          const docRef = collection(db,"PdfDocs")
          try {
              await addDoc(docRef,data)
          } catch (error) {
              console.log(error)
          }
          setLoading(false)
        
      }).catch((error)=>{
        console.log(error)
        setLoading(false)
      })
    })
  
 
  }
  if(loading){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
    )
      }
  return (
    
    <View style={homeStyles.container}>    
     <View style={homeStyles.uploadBox}>
     <View style={homeStyles.uploadHeader}>
     <Image
       style={homeStyles.logo}
       source={require('../../assets/logo4.jpg')}
     />
       {/* <Text style={homeStyles.mainText}>SCODE NETWORK</Text> */}
       </View>
       <AutocompleteDropdown
          clearOnFocus={false}
          closeOnBlur={true}
          closeOnSubmit={false}
          initialValue={{ id: '1' }} // or just '2'
          onSelectItem={setSelectedCategory}
         //  containerStyle={{width:"70%"}}
          inputContainerStyle={homeStyles.inputContainer}
          rightButtonsContainerStyle={{flexDirection:"row",alignItems:"center"}}

         // suggestionsListContainerStyle={{maxHeight:50}}
          dataSet={[
            { id: '1', title: 'Default' },
            { id: '2', title: 'Java' },
            { id: '3', title: 'JavaScript' },
            { id: '4', title: 'C' },
            { id: '5', title: 'Cpp' },
          ]}
        />
       <TouchableOpacity style={homeStyles.button}
        onPress={()=>buttonPressed() }      
       >           
       <Text style={homeStyles.btnText}>Upload</Text>
       </TouchableOpacity>

       <TouchableOpacity style={homeStyles.button2}
        onPress={()=>navigation.navigate('Pdf-List') }      
       >           
       <Text style={homeStyles.btnText}>Pdf-List</Text>
       </TouchableOpacity>
    </View>
  </View>
  );
}
export default HomeScreen
