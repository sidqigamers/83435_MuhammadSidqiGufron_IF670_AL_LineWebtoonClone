import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const categories = ['All', 'Trending', 'Completed', 'Staff Pick', 'Canvas'];
const recommendations = [
  { id: '1', title: 'Cursed Princess Club', genre: 'Comedy', viewers: '12.8M', image: require('../assets/cursed_princess.png') },
  { id: '2', title: 'Solo Leveling', genre: 'Action', viewers: '3.1M', image: require('../assets/solo_leveling.png') },
  { id: '3', title: 'Bleach', genre: 'Action', viewers: '2.1M', image: require('../assets/bleach.png') },
  { id: '4', title: 'Nice To Meet You', genre: 'Romance', viewers: '3.8M', image: require('../assets/nice_to_meet_you.png') },
  { id: '5', title: 'To Love Your Enemy', genre: 'Romance', viewers: '3.7M', image: require('../assets/to_love_your_enemy.png') },
  { id: '6', title: 'Himawari House', genre: 'Slice Of Life', viewers: '4.2M', image: require('../assets/himawari_house.png') },
  { id: '7', title: 'Unnamed Memory', genre: 'Romance', viewers: '5.2M', image: require('../assets/unnamed_memory.png') },
  { id: '8', title: 'Kite Runner', genre: 'Drama', viewers: '8.2M', image: require('../assets/kite_runner.png') },
];

export default function ExploreScreen() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const filteredRecommendations = recommendations.filter(item =>
    item.title.toLowerCase().startsWith(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Recently Add Books</Text>

        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search by title (e.g. S...)"
          value={searchText}
          onChangeText={setSearchText}
        />

        <View style={styles.categoryContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          data={filteredRecommendations}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.genre}>{item.genre}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.likes}>👁 {item.viewers}</Text>
            </View>
          )}
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
    padding: 16,
    paddingBottom: 60,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: '#E8F5E9',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 8,
  },
  categoryText: {
    color: '#28A745',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 12,
    width: 140,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  genre: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 3,
  },
  likes: {
    fontSize: 12,
    color: 'green',
    marginTop: 3,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});
