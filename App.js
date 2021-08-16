import React, {useState, useEffect, useMemo} from 'react'
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native'
import AsyncStorange from '@react-native-async-storage/async-storage'

function App(){
  const [input, setInput] = useState('')
  const [nome, setNome] = useState('')

  useEffect(() => {
    async function LoadData(){
      await AsyncStorange.getItem('@nome').then((value) => {
        setNome(value)
      })
    }

    LoadData()
  },[])

  async function gravaNome(){
    await AsyncStorange.setItem('@nome', input)
    setNome(input)
    setInput('')
  }

  const letrasNome = useMemo(() => {
    console.log('Pegando quantidade de letras ')
    return nome.length
  }, [nome])

  return(
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(texto) => setInput(texto)}
        />  
        <TouchableOpacity onPress={gravaNome}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.nome}>Possui: {letrasNome > 1 ? letrasNome + ' letras' : letrasNome + ' letra'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    marginTop: 35
  },
  viewInput:{
    flexDirection: "row",
    alignItems: 'center'
  },
  input:{
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botao:{
    backgroundColor: '#222',
    color: '#fff',
    height: 40,
    padding: 10,
    marginLeft: 4
  },
  nome:{
    fontSize: 30
  }
})

export default App