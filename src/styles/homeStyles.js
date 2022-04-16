import { StyleSheet } from "react-native";
const homeStyles = StyleSheet.create({
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
    inputContainer:{
    backgroundColor:"white",
    flexDirection:"row",
    borderWidth:2

},
    btnText: {
      fontWeight:"bold",
      fontSize:22,
      color:"white",
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  export default homeStyles