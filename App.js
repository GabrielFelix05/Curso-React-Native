import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import Header from './src/header'
import List from './src/list'

function App(){
  const [feed, setFeed] = useState([
    {
      id: 1, 
      nome: "Gabriel Felix", 
      descricao: "Mais um dia de muitos bugs", 
      imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil1.png", 
      publicacao: "https://sujeitoprogramador.com/instareact/foto1.png", 
      likeada: true, 
      likers: 0
    },
    {
      id: 2, 
      nome: "Felix", 
      descricao: "Mais um dia de muitos bugs", 
      imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil2.png", 
      publicacao: "https://sujeitoprogramador.com/instareact/foto2.png", 
      likeada: false, 
      likers: 1
    },
    {
      id: 2, 
      nome: "Silva", 
      descricao: "Mais um dia de muitos bugs", 
      imgperfil: "https://sujeitoprogramador.com/instareact/fotoPerfil3.png", 
      publicacao: "https://sujeitoprogramador.com/instareact/foto3.png", 
      likeada: false, 
      likers: 30
    }
  ]) 

  return(
    <View style={styles.container}>
      <Header/>
        
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={feed}
        renderItem={({item}) => <List data={item}/>}
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