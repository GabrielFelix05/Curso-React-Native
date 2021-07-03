import React, {useState}from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

function App(){
  const[nome, setNome] = useState('')

  function pegaNome(text){
    if(text.length > 0){
      setNome("Bem vindo " + text)
    }else{
      setNome("")
    }
  }

  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={(text) => pegaNome(text)}
      />
      <Text style={styles.text}>{nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  input:{
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20
  },
  text:{
    textAlign: 'center',
    fontSize: 25
  }
})

export default App