import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

function App(){
  
  let data = new Date().toLocaleString()

  return(
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.textButton}>React Native</Text>
      </View>
      <Image
        source={{uri: "https://sujeitoprogramador.com/reactlogo.png"}}
        style={styles.logo}
      />
      <Text style={styles.data}>{data}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#6E6E6E",
  },
  button: {
    alignItems: 'center',
    borderWidth: 3,
    borderColor: "#fff",
    padding: 10,
    borderRadius: 5,
    width: 200,
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#fff",
  },
  logo: {
    width: 320,
    height: 300,
  },
  data: {
    color: "#fff",
    fontSize: 23,
    paddingTop: 30,
    fontWeight: "bold",
    letterSpacing: 1,
  }
})

export default App