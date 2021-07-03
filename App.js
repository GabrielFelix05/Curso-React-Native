import React from 'react'
import {View, Text} from 'react-native'

function App(){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: "row"}}>
      <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
      <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
      <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
    </View>
  )
}

export default App