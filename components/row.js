import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'
import { wrap } from 'react-native-style-tachyons'

const Row = (props) => {
  return (
    <Link to={`/:id`}>
      <View cls='jcc aic'>
        <Text cls='f4 pv1 red'>{props.name}</Text>
      </View>
    </Link>
  )
}

export default wrap(Row)