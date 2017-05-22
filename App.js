import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'
import List from './pages/list'

NativeTachyons.build({ rem: 16 }, StyleSheet)


export default class App extends React.Component {
  render() {
    return (
        <List />
    )
  }
}
