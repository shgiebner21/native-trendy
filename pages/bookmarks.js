import React, { Component } from 'react'
import { Constants } from 'expo'
import { View, Text, ListView, TouchableOpacity } from 'react-native'
import { Link } from 'react-router-native'
import { connect } from 'react-redux'
import { wrap } from 'react-native-style-tachyons'
import { Octicons } from '@expo/vector-icons'
import { pluck } from 'ramda'

const Row = props => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  )
}

const getBookmarks = (dispatch, getState) => {
  const { db } = getState()
  return db.allDocs({ include_docs: true })
    .then(res =>
      dispatch({type: 'SET_BOOKMARKS', payload: pluck('doc', res.rows)}))
}

class Bookmarks extends Component {
  componentDidMount() {
    this.props.dispatch(getBookmarks)
  }

  render() {
    return(
      <View style={{ paddingTop: Constants.statusBarHeight }} >
          <View cls='flx-row h3 bg-lightgray jcsb aic'
                style={{ paddingTop: Constants.statusBarHeight }}
          >
          <TouchableOpacity>
            <Octicons name='mark-github' cls='f3 ml2' />
          </TouchableOpacity>
          <Text cls='black f4'>Bookmarks</Text>
          <Link to='/'>
            <Octicons name='home' cls='f3 mr2' />
          </Link>
        </View>
        <ListView
          enableEmptySections
          dataSource={this.props.bookmarkDs}
          renderRow={ ({ _id, ...doc }) => {
            return(
              <Row key={_id} {...doc} />
            )
          }}
        />
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(wrap(Bookmarks))
