import React, { useState } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Slider from '@react-native-community/slider'

function App(){
  const [valor, setValue] = useState(50)
  return(
    <View style={styles.container}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={valor}
        onValueChange={(valorSelecionado) => setValue(valorSelecionado)}
        minimumTrackTintColor="#000fff"
        maximumTrackTintColor="#ff0000"
        thumbTintColor="#ff0000"
      />

      <Text style={{textAlign: 'center', fontSize: 30, marginTop: 20}}> Valor: {valor.toFixed(0)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 35
  }
})

export default App