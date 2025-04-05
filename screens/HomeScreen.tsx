import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const recommendations = [
  { id: '1', title: 'Cursed Princess Club', genre: 'Comedy', viewers: '12.8M', image: require('../assets/cursed_princess.png') },
  { id: '2', title: 'Solo Leveling', genre: 'Action', viewers: '3.1M', image: require('../assets/solo_leveling.png') },
  { id: '3', title: 'Bleach', genre: 'Action', viewers: '2.1M', image: require('../assets/bleach.png') },
  { id: '4', title: 'Nice To Meet You', genre: 'Romance', viewers: '3.8M', image: require('../assets/nice_to_meet_you.png') },
  { id: '5', title: 'To Love Your Enemy', genre: 'Romance', viewers: '3.7M', image: require('../assets/to_love_your_enemy.png') },
  { id: '6', title: 'Unnamed Memory', genre: 'Romance', viewers: '5.2M', image: require('../assets/unnamed_memory.png') },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Recommendation for you</Text>
        <FlatList
          data={recommendations}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.genre}>{item.genre}</Text>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.viewers}>❤️ {item.viewers}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
        
        <Text style={styles.title}>Ranking</Text>
        
        <View style={styles.rankingContainer}>
          <Text style={styles.rankingText}>TOP 3 ROMANCE</Text>
          <FlatList
            data={recommendations.filter(item => item.genre === 'Romance').slice(0, 3)}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <View style={[styles.card, { backgroundColor: '#f0f0f0' }]}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.genre}>{item.genre}</Text>
                <Text style={styles.cardTitle}>{`${index + 1}. ${item.title}`}</Text>
                <Text style={styles.viewers}>❤️ {item.viewers}</Text>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.rankingContainer}>
          <Text style={styles.rankingText}>TOP ACTION</Text>
          <FlatList
            data={recommendations.filter(item => item.genre === 'Action').slice(0, 3)}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <View style={[styles.card, { backgroundColor: '#f0f0f0' }]}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.genre}>{item.genre}</Text>
                <Text style={styles.cardTitle}>{`${index + 1}. ${item.title}`}</Text>
                <Text style={styles.viewers}>❤️ {item.viewers}</Text>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    width: 150,
    marginRight: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
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
  rankingContainer: {
    backgroundColor: '#d8f3dc',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  rankingText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
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
