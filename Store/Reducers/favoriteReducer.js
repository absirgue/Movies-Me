/**
 * Enables overeaching state to be modified using a Redux Reducer, each component has, when needed, the ability to switch a film 'isFavorite' value
 * 
 * Author: asirgue
 * Version: 3.0 last edited on 19.11.2021
 */
const initialState = { favoritesFilm: [] }

function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
      if (favoriteFilmIndex !== -1) {
        nextState = {
          ...state,
          favoritesFilm: state.favoritesFilm.filter( (item, index) => index !== favoriteFilmIndex)
        }
      }
      else {
        nextState = {
          ...state,
          favoritesFilm: [...state.favoritesFilm, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleFavorite