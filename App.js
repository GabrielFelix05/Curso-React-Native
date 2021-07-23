import React, { useState } from 'react'
import {View, Text, StyleSheet, Switch} from 'react-native'

function App(){
  const [status, setStatus] = useState(false)
  return(
    <View style={styles.container}>
      <Switch
        value={status}
        onValueChange={ (valorSelecionado) => setStatus(valorSelecionado)}
        trackColor={{false: "#121212", true: "#00ff00"}}
        thumbColor={status ? "#121212" : "#f4f4f4"}
      />
      <Text style={{textAlign: 'center', fontSize: 30, marginTop: 20}}>
        Status: {!status ? "Olá" : "Olá Mundo"} 
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