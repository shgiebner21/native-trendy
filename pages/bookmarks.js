import React, { Component } from 'react'
import { Constants } from 'expo'
import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import { wrap } from 'react-native-style-tachyons'

class Bookmarks extends Component {
  componentDidMount() {
    this.props.db.allDocs({ include_docs: true })
      .then(res => console.log(res))
  }

  render() {
    return(
      <View style={{ paddingTop: Constants.statusBarHeight }} >
        <Text>Show my Bookmarks</Text>
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(wrap(Bookmarks))
