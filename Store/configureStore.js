/**
 * Initiates a Redux store to allow for an 'overeaching' state to store a list of favorite movies across components
 * 
 * Author: asirgue
 * Version: 3.0 last edited on 19.11.2021
 */
import { createStore } from 'redux';
import toggleFavorite from './Reducers/favoriteReducer'

export default createStore(toggleFavorite)
