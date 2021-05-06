/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';

import ArticleDetails from './src/components/ArticleDetails';
import Home from './src/components/Home';
import SearchIcon from './src/components/SearchIcon';
import SearchForm from './src/components/SearchForm';

import color from 'color';

const App: () => Node = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Media Probe', headerRight: () => <SearchIcon />}}
        />
        <Stack.Screen
          name="ArticleDetails"
          component={ArticleDetails}
          options={{title: 'Article'}}
        />
        <Stack.Screen
          name="SearchForm"
          component={SearchForm}
          options={{title: 'Search Articles'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
