import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { storage } from './src/config/firebase';
import {ref, uploadBytes, get, getDownloadURL} from 'firebase/storage'
import supportedCommands from 'react-native/Libraries/Components/TextInput/TextInputNativeCommands';

export default function App() {
  const buttonPressed = ()=>{
    DocumentPicker.getDocumentAsync({type:"application/pdf"})
    .then((value)=>{
      const storageRef = ref(storage,"docs")
     
        uploadBytes(storageRef,value.uri).then(async(snapshot)=>{
          const url = await getDownloadURL(storageRef)
          console.log(url)
        console.log(snapshot)
      })
    })
  }
  return (
    <View style={styles.container}>
       <Text style={styles.mainText}>PDF UPLOADER</Text>
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
    backgroundColor: "#24a2d4",
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:"black",
   // borderRadius:10
   marginTop:30
  },
  mainText: {
    fontWeight:"bold",
    fontSize:24,
    //color:"white",
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontWeight:"bold",
    fontSize:24,
    color:"white",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
