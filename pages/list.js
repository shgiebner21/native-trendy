import React, { Component } from 'react'
import { View } from 'react-native'
import Header from '../containers/header'
import Repos from '../containers/repos'

class List extends Component {
  componentDidMount() {

  }

  render() {
    return(
      <View>
        <Header />
        <Repos />
      </View>
    )
  }
}


export default List
