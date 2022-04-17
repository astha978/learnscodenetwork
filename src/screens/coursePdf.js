import { StyleSheet, Text, View,FlatList, TouchableOpacity} from 'react-native'
import React from 'react'

const coursePdf = ({navigation}) => {
  const DATA = [
    {id:'1', name:"OOPs Concept"},
    {id:'2', name:"Class"},
    {id:'3', name:"Object"},
    {id:'4', name:"Variable"},
    {id:'5', name:"Data Types"},
    {id:'6', name:"Data Abstraction"},
    {id:'7', name:"Inheritence"},
    {id:'8', name:"Data Encapsulation"},
    {id:'9', name:"Polymorphism"},
    {id:'10', name:"Method & Method Passing"},
    {id:'2', name:"Integer"},
    {id:'3', name:"Floating Point "},
    {id:'4', name:"Array"},
    {id:'2', name:"Character"},
    {id:'3', name:"String"},
    {id:'4', name:"File System"},

 ]
 const renderItem = ({item})=>{
 return(
   <View style={styles.pdfList}> 
   <TouchableOpacity onPress={()=>navigation.navigate('Course-Pdf') } >
   <Text style={styles.pdfText}>{item.name}</Text> 
   </TouchableOpacity> 
   </View>
 )}
 return (
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
export default coursePdf


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