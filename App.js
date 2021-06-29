import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function App(){
  return(
    <View style={styles.area}>
      <Text style={[styles.titulo, styles.textoAlinhado]}>Gabriel</Text>
      <Text style={[styles.titulo, styles.textoAlinhado]}>20</Text>
      <Text style={styles.subTitulo}>Sou um texto 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  area:{
    marginTop: 50,
  },
  titulo:{
    fontSize: 20,
    color: '#ff0000'
  },
  subTitulo:{
    color: '#00ff00',
    fontSize: 17
  },
  textoAlinhado:{
    textAlign: 'center'
  }
})

export default App