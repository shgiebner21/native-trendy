import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import Header from '../containers/header'
import Repos from '../containers/repos'

const getTrendingRepos = dispatch => {
  dispatch({ type: 'ISLOADNG', payload: true })
  return fetch(
    'https://runkit.io/twilson63/58f64c0ce5dc270012c6eaa6/branches/master'
  ).then(res => res.json())
   .then(repos => {
     dispatch({ type: 'SET_REPOS', payload: repos })
     dispatch({ type: 'ISLOADING', payload: false })
  })
}

class List extends Component {
  componentDidMount() {
    this.props.dispatch(getTrendingRepos)
  }

  render() {
    if (this.props.loading) {
      return <AppLoading />
    }

    return(
      <View>
        <Header />
        <Repos dataSource={this.props.dataSource}/>
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(List)
