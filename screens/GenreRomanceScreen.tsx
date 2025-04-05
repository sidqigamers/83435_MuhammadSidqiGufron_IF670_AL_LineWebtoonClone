import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const romanceBooks = [
  { id: '1', title: 'Nice To Meet You', genre: 'Romance', viewers: '3.8M', image: require('../assets/nice_to_meet_you.png') },
  { id: '2', title: 'To Love Your Enemy', genre: 'Romance', viewers: '3.7M', image: require('../assets/to_love_your_enemy.png') },
  { id: '3', title: 'Unnamed Memory', genre: 'Romance', viewers: '5.2M', image: require('../assets/unnamed_memory.png') },
];

export default function GenreRomanceScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Romance Genre</Text>
        
        <FlatList
          data={romanceBooks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.genre}>{item.genre}</Text>
                <Text style={styles.viewers}>❤️ {item.viewers}</Text>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>

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
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  scrollView: {
    paddingBottom: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  genre: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  viewers: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});
