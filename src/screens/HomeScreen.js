import { StyleSheet, Text, View, TouchableOpacity,Image ,Loader,ActivityIndicator } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { db, storage } from '../config/firebase';
import {ref, uploadBytes, get, getDownloadURL} from 'firebase/storage';
import {doc, serverTimestamp} from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore"; 
import React,{useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const HomeScreen=({navigation})=>{
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
    
    <View style={styles.container}>    
     <View style={styles.uploadBox}>
     <View style={styles.uploadHeader}>
     <Image
       style={styles.logo}
       source={require('../../assets/logo4.jpg')}
     />
       {/* <Text style={styles.mainText}>SCODE NETWORK</Text> */}
       </View>
       <TouchableOpacity style={styles.button}
        onPress={()=>buttonPressed() }      
       >           
       <Text style={styles.btnText}>Upload</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.button2}
        onPress={()=>navigation.navigate('Pdf-List') }      
       >           
       <Text style={styles.btnText}>Pdf-List</Text>
       </TouchableOpacity>
    </View>
  </View>
  );
}
export default HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  backgroundColor: "#a3d9cc",
    backgroundColor:"#c6e6f5",
  },
  uploadBox:{
    marginTop:80,
   // backgroundColor: '#fff',
    alignItems:"center",
    justifyContent: "center",

  },
  uploadHeader:{
   // marginTop:140,
    backgroundColor: "black",
  alignItems:"center",
  justifyContent:"center",
    width:"60%",
    aspectRatio:1,
    borderRadius:"100%",
    borderWidth:3,
    borderColor:"white"
  },
  logo:{
    width:"68%",
    aspectRatio:1,
    //marginLeft:13,
    resizeMode:"stretch",
    //marginTop:50,
   // paddingBottom:9,
    justifyContent:"center",
    alignItems:"center"

  },
  button: {
    width:"70%",
    height:60,
    borderRadius:10,
    backgroundColor: "#6413b0",
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:"black",
    // borderRadius:10
    marginTop:60,
    borderWidth:2,
    borderColor:"white"
  },
  button2: {
    width:"70%",
    height:50,
    borderRadius:10,
    backgroundColor: "#5fde81",
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:"black",
    // borderRadius:10
    marginTop:30,
    borderWidth:2,
    borderColor:"white"
  },

  btnText: {
    fontWeight:"bold",
    fontSize:22,
    color:"white",
    alignItems: 'center',
    justifyContent: 'center',
  },
});