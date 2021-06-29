import React, {useState} from 'react'
import {View, Text, Button} from 'react-native'

function App(){
  const [nome, setNome] = useState('Gabriel')
  const [idade, setIdade] = useState(20)

  function entrar(){
    setNome('Felix!')
    setIdade(25)
  }

  return(
    <View style={{marginTop: 25}}>
      <Button title="Mudar nome" onPress={entrar}/>
      <Text style={{fontSize: 19}}>{nome}</Text>
      <Text style={{fontSize: 17}}>{idade} Anos</Text>
    </View>
  )
}

export default App