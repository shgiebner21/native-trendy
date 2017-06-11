import React, { Component } from 'react'
import { wrap } from 'react-native-style-tachyons'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Link } from 'react-router-native'
import { Octicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import qs from 'querystring'
import {tail, replace, pathOr} from 'ramda'
import { connect } from 'react-redux'

const saveRepo = history => (dispatch, getState) => {
  const { db, repo } = getState()
  db.post(repo)
    .then(res => {
      if (res.ok) {
        history.push('/')
      }
    })
    .catch(err => console.log(err))
}

const getReadme = (url, title) => dispatch => fetch(url)
  .then(res => res.text())
  .then(readme => dispatch({ type: 'SET_REPO', payload: { url, title, readme } }))

class Show extends Component {
  componentDidMount() {
    const { url, title } = qs.parse(tail(this.props.location.search))
    const readmeUrl = replace('https://github.com', 'https://raw.githubusercontent.com', url)
                      + '/master/README.md'
    this.props.dispatch(getReadme(readmeUrl, title))
  }

  render() {
    return(
      <View cls='jcsb'>
        <View cls='flx-row h3 bg-lightblue jcsb aic'
          style={{ paddingTop: Constants.statusBarHeight}}>
          <Text cls='f4 ml3'>Show me the Repo!</Text>
          <Link to='/' cls=''>
            <Text cls='mr3 f4'>close</Text>
          </Link>
        </View>
        <View cls='flx-row jcsb aic mh2'>
          <Text>{pathOr('Repo', ['props', 'repo', 'title'], this)}</Text>
          <TouchableOpacity
            onPress={ () => this.props.dispatch(saveRepo(this.props.history)) }>
            <Octicons name='bookmark' size={32} />
          </TouchableOpacity>
        </View>
        <ScrollView cls='ma2 h6'>
          <Text>{pathOr('', ['props', 'repo', 'readme'], this)}</Text>
        </ScrollView>
        <View cls='flx-row h3 bg-lightgray jcsa aic'>
          <Text>Footer</Text>
        </View>
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(wrap(Show))
