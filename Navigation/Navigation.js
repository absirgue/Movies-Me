/**
 * Handles the Navigation in our app
 * See in file comments for details about navigation
 * 
 * Author: asirgue
 * Version: 3.0 last edited on 19.11.2021
 */

import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import{createBottomTabNavigator} from 'react-navigation-tabs'
import Search from '../Components/search'
import FilmDetail from '../Components/FimDetail'
import Favorites from '../Components/Favorites'

// Creating a stack navigator to handle switching from Search view to FilmDetail view when the user selects the film he wants to inspect
const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

// Creating a stack navigator to handle switching from Favorites view (list of movies marked as favorite) to FilmDetail view when the user wants to inspect one of his favorite movies
const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

// Handling the overall navigation in our app by incorporating the two previously created stack navigations 
const MoviesTabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_search.png')}
            style={styles.icon}/>
        }
      }
    },
    Favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_favorite.png')}
            style={styles.icon}/>
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF',
      showLabel: false,
      showIcon: true
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(MoviesTabNavigator)