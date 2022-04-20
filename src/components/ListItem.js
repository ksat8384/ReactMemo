import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

/**
 * Memoized list item component to avoid re-render unless its prop changes.
 *
 * This avoids re-rendering all the List items whenever the user adds a new item, insteads re-renders only the new list item
 */
const ListItem = React.memo(({item}) => {
  console.log('Render : ListItem');
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
});

export default ListItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#00ffff',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 32,
  },
});
