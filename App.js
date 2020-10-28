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
      <Text>What is your name?</Text>        
       <Text> My name is {name} </Text>
  
       <TextInput
       multiline
        style={styles.input}
        placeholder='e.g My name is Jane Doe'
                onChangeText={(value)=> setName(value)}
        />
      <Text>What is your age?</Text>    
      <Text>I am {age} years old </Text>
   
       <TextInput
       keyboardType='numeric'
       multiline
        style={styles.input}
        placeholder='e.g 100'
                onChangeText={(value)=> setAge(value)}
        />

        
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
