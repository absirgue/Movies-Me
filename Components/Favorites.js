/**
 * Handles the Favorites view allowing to dispaly a list of the user's favorite movies
 * 
 * Author: asirgue
 * Version: 3.0 last edited on 19.11.2021
 */

import React from 'react'
import { StyleSheet, Text } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'

// Simply uses the FilmList Component to display a list of movies markes as favorite 
class Favorites extends React.Component {

  render() {
    return (
      <FilmList
        films={this.props.favoritesFilm}
        navigation={this.props.navigation}
        favoriteList={true} 
      />
    )
  }
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(Favorites)