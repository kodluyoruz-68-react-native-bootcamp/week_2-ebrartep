import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Image } from 'react-native';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */
import {TodoList} from "./components/TodoList";

function App() {
  return (
    <TodoList></TodoList>
  );
}

export default App;
