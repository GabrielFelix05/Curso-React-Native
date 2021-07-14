import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Pessoa from './src/Pessoa'

function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Sejá bem vindo!</Text>
      <View style={styles.conteudo}>
        <Text>{<Pessoa/>}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  text:{
    fontSize: 22,
    fontWeight: 'bold',
    margin: 30
  },
  conteudo:{
    width: '100%',
    height: 300,
    backgroundColor: '#0B0B61',
    justifyContent: 'center',
    padding: 15
  }
})

export default App