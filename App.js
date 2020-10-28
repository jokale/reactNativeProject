import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const[people, setPeople] = useState([
    {name: 'joanna', key: '1'},
    {name: 'jo', key: '2'},
    {name: 'joanne', key: '3'},
    {name: 'joann', key: '4'},
    {name: 'johannah', key: '5'}


  ])

  return (
    <ScrollView>
    <View style={styles.container}>
      {people.map(item => {
        return (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )

      })}

        
    </View></ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: 'purple',
    fontSize: 24,
  },

});
