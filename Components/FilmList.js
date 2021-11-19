/**
 * Handles the display of a list of films as well as the navigation to a FilmDetail view when the user clicks on a specific film of the list
 * 
 * Author: asirgue
 * Version: 3.0 last edited on 19.11.2021
 */

import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import FilmItem from './filmItem'
import { connect } from 'react-redux'

class FilmList extends React.Component {

  // Updates state with list of films
  constructor(props) {
    super(props)
    this.state = {
      films: []
    }
  }

  // Navigates to FilmDetail view when the user clicks on a filmItem object
  _displayDetailForFilm = (idFilm) => {
    console.log("Display film " + idFilm)
    this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
  }

  render() {
    return (
        <FlatList
          style={styles.list}
          data={this.props.films}
          extraData={this.props.favoritesFilm}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <FilmItem
              film={item}
              isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false} // Bonus pour différencier les films déjà présent dans notre state global et qui n'ont donc pas besoin d'être récupérés depuis l'API
              displayDetailForFilm={this._displayDetailForFilm}
            />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (!this.props.favoriteList && this.props.page < this.props.totalPages) {
              this.props.loadFilms()
            }
          }}
        />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(FilmList)

