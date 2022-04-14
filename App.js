import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';


export default function App() {
  const buttonPressed = ()=>{
    DocumentPicker.getDocumentAsync({type:"application/pdf"})
    .then(value=>{
      console.log(value.uri)
    })
  }
  return (
    <View style={styles.container}>
       <Text>PDF VIEWER</Text>
       <TouchableOpacity style={styles.button}
        onPress={()=>buttonPressed()    }
       
       >  
          
       <Text style={styles.btnText}>Upload</Text>
       </TouchableOpacity>


    </View>
  
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width:"50%",
    aspectRatio:1,
    borderRadius:400,
    backgroundColor: "blue",
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:"black",
   // borderRadius:10
   marginTop:30
  },
  btnText: {
    fontWeight:"bold",
    fontSize:24,
    color:"white",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
