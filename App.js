import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

function App(){
  const [feed, setFeed] = useState([
    {id: '1', nome: 'Gabriel', idade: 23, email: 'gabriel@gmail.com'},
    {id: '2', nome: 'Gabriel', idade: 23, email: 'gabriel@gmail.com'},
    {id: '3', nome: 'Gabriel', idade: 23, email: 'gabriel@gmail.com'},
    {id: '4', nome: 'Gabriel', idade: 23, email: 'gabriel@gmail.com'}
  ])
  return(
    <View style={styles.container}>
      <FlatList
        data={feed}
        renderItem={({ item }) => <Pessoa data={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  areaPessoa:{
    backgroundColor: '#121212',
    height: 200,
    marginBottom: 15,
    justifyContent: 'center'
  },
  textPessoa:{
    color: '#fff',
    fontSize: 30
  }
})

function Pessoa(props){
  return(
    <View style={styles.areaPessoa}>
      <Text style={styles.textPessoa}>{props.data.nome}</Text>
      <Text style={styles.textPessoa}>{props.data.idade}</Text>
      <Text style={styles.textPessoa}>{props.data.email}</Text>
    </View>
  )
}
export default App