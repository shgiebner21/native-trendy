import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'
import { NativeRouter, Route, Switch } from 'react-router-native'
import { Provider } from 'react-redux'
import store from './store'
import List from './pages/list'
import Settings from './pages/settings'
import Show from './pages/show'
import Bookmarks from './pages/bookmarks'

NativeTachyons.build({ rem: 16 }, StyleSheet)


class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Route exact path='/' component={Bookmarks} />
          <Switch>
            <Route path='/settings' component={Settings} />
            <Route path='/show' component={Show} />
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
