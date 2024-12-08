import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore</Text>
    </View>
  )
}

export default Explore


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
    justifyContent: 'center',
  }, 
  text: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',

  }
})


