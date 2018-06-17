// Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Rikki Albums'} />
        <AlbumList />
    </View>    
    );
// Render a component
AppRegistry.registerComponent('albums', () => App);
