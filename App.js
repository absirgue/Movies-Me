/**
 * Movies&Me is a first experience with React Native, the App allows you to search for a movie, read basic informations about it, mark it as favorite, and even share it with a friend !
 * Nice way to plan movie nights !
 * 
 * Author: asirgue
 * Version: 3.0 last edited on 19.11.2021
 */

import React from 'react'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation/>
      </Provider>
    )
  }
}