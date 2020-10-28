import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const[name, setName] = useState('Joanna')
  const[age, setAge] = useState(22)

  // using setName or set whatever is just naming convention 
  //we can pass in any type of object into the state a boolean, string array


  // good to put the logic above because placing it in the OnPress function would make it messy 
  // it seems I can put all my update state in one click 
  
  return (
    <View style={styles.container}>
      <Text> My name is {name} and I am {age} years old </Text>
      <Text>What is your name?</Text>     
       <TextInput/>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
