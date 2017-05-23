import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import NativeTachyons, { wrap } from 'react-native-style-tachyons'
import { Link } from 'react-router-native'
import { Constants } from 'expo'
import { Ionicons, Octicons } from '@expo/vector-icons'

const Header = () => {
  return (
    <View cls='flx-row h3 bg-lightblue jcsb aic' style={[styles.container]}>
      <TouchableOpacity>
        <Octicons name='mark-github' cls='f3 ml2' />
      </TouchableOpacity>
      <Text cls='black f4' >Github trending repos</Text>
      <Link to='/settings'>
        <Octicons cls='f3 mr2 black' name='gear' />
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight
  }
})

export default wrap(Header)
