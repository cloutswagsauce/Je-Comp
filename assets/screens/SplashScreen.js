import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text>Flep Buddy</Text>
      <TouchableOpacity>
        <Text>Create Account</Text>
      </TouchableOpacity>
      


    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    }
})