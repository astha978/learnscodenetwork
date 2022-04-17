import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image,Loader, ActivityIndicator } from 'react-native'
import React, {useState} from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { db, storage } from '../config/firebase';
import {ref, uploadBytes, get, getDownloadURL} from 'firebase/storage';
import {doc, serverTimestamp} from 'firebase/firestore';

const courseList= ({navigation}) => {
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
  }//ye yha close hona chahiye function
      if(loading){
        return(
          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
        )
          }


  const DATA = [
    {id:'1', name:"Ethical Hacking"},
    {id:'2', name:"Java Script"},
    {id:'3', name:"Python"},
    {id:'4', name:"C Programming"},
    {id:'5', name:"C++ Programming"},
    {id:'6', name:"HTML"},
    {id:'7', name:"PHP"},

 ]
 const renderItem = ({item})=>{
 return(
  <View>
   <View style={styles.pdfList}> 
   <Text style={styles.pdfText}>{item.name}</Text>
   
    </View>
    <View style={styles.addBox}>
    <View style={styles.addBtn}> 
    <TouchableOpacity onPress={()=>navigation.navigate('Course-Pdf') } >
    <Text style={styles.btnText}>show pdf</Text>
    </TouchableOpacity> 
    </View>
    <View style={styles.addBtn}> 
    <TouchableOpacity onPress={()=>buttonPressed()} >
    <Text style={styles.btnText}>add pdf</Text>
    </TouchableOpacity> 
    </View>
   </View>
  </View>
 )}
 return(
   <View style={styles.container}> 
   {/* <View style={styles.container2}>
       <Image     
       style={styles.logo}
       source={require('../../assets/logo.jpg')}
     /> 
     <Text style={styles.headerText}>PDF Viewer</Text>
   
   </View> */}
     
     <FlatList
     data= {DATA}
     keyExtractor={ (item) => {item.id}}
     renderItem={renderItem}
     //contentContainerStyle={{flex:1,backgroundColor:"red"}}
     />

   </View>

 );
  }
export default courseList


const styles = StyleSheet.create({
  container:{
    flex:1,
   // backgroundColor:"#f5e7d0",
   backgroundColor: "#dae4ed",
  },
  container2:{
    flexDirection:"row",
   // backgroundColor:"#f5e7d0",
   backgroundColor: "#5fde81",
    marginTop:10
  
  },
  logo:{
   height:60,
   width:80,
   // aspectRatio:1,
    marginLeft:10,
    marginVertical:10,
    resizeMode:"stretch"
  },
  headerText:{
    fontSize:20,
    color:"#3e6ac2",
    borderColor:"white",
    fontWeight:"bold",
     marginLeft:10,
     marginTop:20,
  //   borderWidth:"1px",
  //   borderColor:"black"
     
   },
  
   pdfBox:{
     flex:1,
     marxginTop:35,
    // marginLeft:200,
    borderWidth:1,
    justifyContent:"center",
    alignItems:"center",
  //  backgroundColor:"#5abfed"
   },
   pdfList:{
    borderColor:"blue",
    backgroundColor:"#3b70cc",
  // backgroundColor: "#5fde81",
    borderColor:"black",
    marginVertical:2,
    flex:1,
    marginTop:8,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",     
   },
   addBox:{
     justifyContent:"center",
     alignItems:"center",
     flexDirection:"row",
     justifyContent:"space-around"
   },
   addBtn:{
     backgroundColor:"green",
    marginVertical:2,
     width:"30%",
     aspectRatio:2.5,    
      borderRadius:20,
      backgroundColor: "#6413b0",
      alignItems:"center",
      justifyContent:"center",
      borderColor:"black",
      // borderRadius:10
     // marginTop:60,
      borderWidth:2,
      borderColor:"white"
   },
   btnText:{
   color:"white",  
   fontSize:18,
   fontWeight:"bold",

   },

   pdfText:{
     color:"white",
     marginTop:10,
     marginBottom:10,
     fontSize:25,
     fontWeight:"bold",
    alignItems:"center",
    justifyContent:"center",
    marginLeft:4,
    paddingTop:4
     
   }
})
