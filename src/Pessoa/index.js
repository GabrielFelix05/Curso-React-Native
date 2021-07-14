import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function Pessoa(props){
    return(
      <View>
        <Text style={styles.text}>Nome: Sujeito programdor</Text>
        <Text style={styles.text}>Cargo: Sujeito programdor</Text>
      </View>
    )
}
const styles = StyleSheet.create({
    text:{
        color: '#fff',
        fontSize: 20
    }
})

export default Pessoa