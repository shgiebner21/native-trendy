import React, { Component } from 'react'
import { wrap } from 'react-native-style-tachyons'
import { View, Text, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import { Constants } from 'expo'
import qs from 'querystring'
import {tail, replace} from 'ramda'
import { connect } from 'react-redux'


const getReadme = url => dispatch => fetch(url)
  .then(res => res.text())
  .then(readme => dispatch({ type: 'SET_README', payload: readme }))

class Show extends Component {
  componentDidMount() {
    const { url } = qs.parse(tail(this.props.location.search))
    const readmeUrl = replace('https://github.com', 'https://raw.githubusercontent.com', url)
                      + '/master/README.md'
    this.props.dispatch(getReadme(readmeUrl))
  }

  render() {
    return(
      <View>
        <View cls='flx-row h3 bg-lightblue jcsb aic'
          style={{ paddingTop: Constants.statusBarHeight}}>
          <Text cls='f4 ml3'>Show me the Repo!</Text>
          <Link to='/' cls=''>
            <Text cls='mr3 f4'>close</Text>
          </Link>
        </View>
        <ScrollView>
          <Text cls='ma2'>{this.props.readme}</Text>
        </ScrollView>
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(wrap(Show))
