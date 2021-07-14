import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import Pessoa from './src/Pessoa'

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
  }
})

export default App