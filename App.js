import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const[name, setName] = useState('Joanna')
  // using setName or set whatever is just naming convention 
  //we can pass in any type of object into the state a boolean, string array

  const[person, setPerson] = useState({ name: 'Jonathan', age: 23})

  // good to put the logic above because placing it in the OnPress function would make it messy 
  // it seems I can put all my update state in one click 
  
  const pressHandler =()=> {
    setName('Jo Jo Joanna')
    setPerson({name: 'Jo Jo Jonathan', age: 24})
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
      <Text style={styles.boldText}>Yo</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText} >My name is {name}</Text>
        <Text>My brothers name is {person.name} and he is {person.age} years old</Text>
        <View style={styles.buttonContainer}>
        <Button title='updating state' onPress={pressHandler}/>
        </View>
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
