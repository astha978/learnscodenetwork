import { StyleSheet, Text, View,FlatList, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs, query, where } from 'firebase/firestore'
import * as Linking from 'expo-linking'
import { db } from '../config/firebase'

const pdfListScreen = (props) => {
  const {navigation,route} = props
  const {id} = route.params
  const [data,setData] = useState([])
  useEffect(()=>{
    const pdfRef = collection(db,"PdfDocs")
    const q = query(pdfRef,where("courseId","==",id))
     async function fetchData () {
       try {
        const data = await getDocs(q)
        setData(data.docs.map((doc)=>({...doc.data()})))
       } catch (error) {
         console.log(error)
       }
     }
     fetchData()
   
  },[])
 const renderItem = ({item})=>{
 return(
   <View style={styles.pdfList}> 
   <TouchableOpacity onPress={()=>Linking.openURL(item.url) } >
   <Text style={styles.pdfText}>{item.name}</Text> 
   </TouchableOpacity> 
   </View>
 )}
 if(data.length==0)
 {
   return(
     
    <View style={[styles.container,{justifyContent:"center",alignItems:"center"}]}>
      <Text style={{fontWeight:"bold",color:"white",fontSize:30}}>No Results Found</Text>
    </View>
   )
 }
 return (
   <View style={styles.container}> 
   {/* <View style={styles.container2}>
       <Image     
       style={styles.logo}
       source={require('../../assets/logo.jpg')}
     /> 
     <Text style={styles.headerText}>PDF Viewer</Text>
   
   </View>  */}
     
     <FlatList
     data= {data}
     keyExtractor={ (item) => {item.id}}
     renderItem={renderItem}
     //contentContainerStyle={{flex:1,backgroundColor:"red"}}
     />

   </View>

 );
}
export default pdfListScreen


const styles = StyleSheet.create({
  container:{
    flex:1,
   // backgroundColor:"#f5e7d0",
   backgroundColor: "#a3d9cc",
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
     marginTop:35,
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
    borderRadius:10
     
   },
   pdfText:{
     color:"white",
     marginTop:10,
     marginBottom:10,
     fontSize:20,
     fontWeight:"bold",
    alignItems:"center",
    justifyContent:"center",
    marginLeft:4,
    paddingTop:4
     
   }
})

//export default PdfList

// const styles = StyleSheet.create({
// Container:{
//     flex:1,
//     alignItems:"center",
//     justifyContent:"center",
//     backgroundColor: "#a3d9cc",
//     },
// HeaderText:{
// //alignItems:"center",
// //justifyContent:"center",

// marginTop:300,

// },

// })