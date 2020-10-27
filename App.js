import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
      <Text style={styles.boldText}>Yo</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText} >Joanna's mock mobile application</Text>
        <Text style={styles.boldText} >Lorem ipsum dolor</Text>
        <Text style={styles.boldText} >Lorem ipsum dolor</Text>
        <Text style={styles.boldText} >Lorem ipsum dolor</Text>

      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1B9E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    padding: 60,
    backgroundColor: 'purple',
  }
});
