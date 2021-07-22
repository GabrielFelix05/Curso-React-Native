import React, { useState } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Picker } from '@react-native-picker/picker'

function App(){
  const [carroSelecionado, setCarroSelecionado] = useState(0)
  const [carros, setCarros] = useState([
    {key: 1, nome: "Golf 1.6", valor: 62.000},
    {key: 2, nome: "Saveiro", valor: 29.300},
    {key: 3, nome: "Gol 1.0", valor: 25.200},
    {key: 4, nome: "bmw", valor: 109.000}
  ])

  let carrosItens = carros.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome}/>
  })
  return(
    <View style={styles.container}>
     <Picker
      selectedValue={carroSelecionado}
      onValueChange={(itemValue, itemIndex) => setCarroSelecionado(itemValue)}
     >
       {carrosItens}
     </Picker>
      <Text>
        R$: {carros[carroSelecionado].valor.toFixed(3)}
      </Text>
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