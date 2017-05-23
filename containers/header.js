import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'
import { wrap } from 'react-native-style-tachyons'
import { Constants } from 'expo'

const Header = () => {
  return (
    <View cls='h3' style={[styles.container]}>
      <Text>I am a Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight
  }
})

export default wrap(Header)
