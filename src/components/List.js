import React from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItem";

/**
 * Memoized list component to avoid re-render unless its prop changes.
 *
 * This avoids re-rendering the List whenever the user types into the input field
 */
const List = React.memo(({ list }) => {
  console.log("Render : List");

  const renderItem = ({ item }) => <ListItem key={item.id} item={item} />;

  return <FlatList testID="flat-list" data={list} renderItem={renderItem} />;
});

export default List;
