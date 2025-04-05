import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-reanimated';

import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen.tsx';
import LibraryScreen from './screens/LibraryScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import GenreScreen from './screens/GenreScreen';
import GenreActionScreen from './screens/GenreActionScreen';
import GenreComedyScreen from './screens/GenreComedyScreen';
import GenreRomanceScreen from './screens/GenreRomanceScreen';
import GenreDramaScreen from './screens/GenreDramaScreen';
import GenreSliceOfLifeScreen from './screens/GenreSliceOfLifeScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Explore" component={ExploreScreen} />
        <Drawer.Screen name="Library" component={LibraryScreen} />
        <Drawer.Screen name="Genre" component={GenreScreen} />
        <Drawer.Screen name="More" component={FavoritesScreen} />
        <Drawer.Screen name="(Genre)Action" component={GenreActionScreen} />
        <Drawer.Screen name="(Genre)Comedy" component={GenreComedyScreen} />
        <Drawer.Screen name="(Genre)Romance" component={GenreRomanceScreen} />
        <Drawer.Screen name="(Genre)Drama" component={GenreDramaScreen} />
        <Drawer.Screen name="(Genre)Slice Of Life" component={GenreSliceOfLifeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
