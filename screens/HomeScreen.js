import { SafeAreaView, StyleSheet, Text, StatusBar, View } from 'react-native'
import React from 'react'


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>I am the Homescreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
},
})