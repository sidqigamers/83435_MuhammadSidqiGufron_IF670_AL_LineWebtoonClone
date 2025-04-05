import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const genres = [
  { id: '1', name: 'Action', screen: '(Genre)Action' },
  { id: '2', name: 'Comedy', screen: '(Genre)Comedy' },
  { id: '3', name: 'Romance', screen: '(Genre)Romance' },
  { id: '4', name: 'Drama', screen: '(Genre)Drama' },
  { id: '5', name: 'Slice of Life', screen: '(Genre)Slice Of Life' },
];

export default function GenreScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Genre</Text>
      <FlatList
        data={genres}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(item.screen)}>
            <Text style={styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name='home' type='feather' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
          <Icon name='book' type='feather' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Library')}>
          <Icon name='layout' type='feather' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Genre')}>
          <Icon name='grid' type='feather' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('More')}>
          <Icon name='more-horizontal' type='feather' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
  },
});