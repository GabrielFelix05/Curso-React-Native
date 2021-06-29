import React from 'react'
import {View, Text, Image} from 'react-native'

function App(){
  const name = "Gabriel"
  const img = "https://sujeitoprogramador.com/reactlogo.png"
  return(
    <View>
      <Text>Olá Mundo !!!!</Text>
      <Text>Meu Primeiro App</Text>

      <Image 
        source={{uri: img}}
        style={{width: 300, height: 300}}
      />

      <Text style={{fontSize: 19}}>
        Olá {name}
      </Text>
    </View>
  )
}

export default App