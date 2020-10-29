import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

export default function App() {
  const[people, setPeople] = useState([
    {name: 'joanna', id: '1'},
    {name: 'jo', id: '2'},
    {name: 'joanne', id: '3'},
    {name: 'joann', id: '4'},
    {name: 'johannah', id: '5'}
    

  ])

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople)=> {
      return prevPeople.filter(person => person.id !=id)
    } )
  }

  return (
   
    <View style={styles.container}> 
    {/* < ScrollView>
      {people.map(item => {
        return (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )

      })}
</ScrollView> */}
<FlatList
  numColumns={2}
  keyExtractor={(item)=> item.id}
  data={people}
  renderItem={({ item })=> (

    <TouchableOpacity onPress={()=> pressHandler(item.id)}>
    <Text style={styles.item}>
       {item.name}</Text></TouchableOpacity>

  )}
/>
        
    </View>
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
