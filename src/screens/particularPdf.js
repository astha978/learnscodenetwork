import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const particularPdf = () => {
  return (
    <View style={styles.Container}>
      <Text style={{fontWeight:"bold", fontSize:20}} >particularPdf</Text>
    </View>
  )
}

export default particularPdf

const styles = StyleSheet.create({
Container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "#a3d9cc",
    },
HeaderText:{
//alignItems:"center",
//justifyContent:"center",

marginTop:300,

},

})