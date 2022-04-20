import React, {useState, useMemo} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, Button} from 'react-native';
import List from './src/components/List';
import uuid from 'react-native-uuid';

const USERS = [
  {id: 'a', name: 'Batman'},
  {id: 'b', name: 'Superman'},
  {id: 'c', name: 'Ironman'},
  {id: 'i', name: 'Spiderman'},
];

const App = () => {
  console.log('Render : App');
  const [text, setText] = useState('');
  const [users, setUsers] = useState(USERS);

  const handleText = text => {
    setText(text);
  };

  const handleAddUser = () => {
    setUsers(users.concat({id: uuid.v1(), name: text}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new user to add here..."
        value={text}
        onChangeText={handleText}
      />

      <Button title="Add User" onPress={handleAddUser} />

      <List list={users} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    backgroundColor: 'white',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

export default App;
