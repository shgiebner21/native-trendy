import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'
import { wrap } from 'react-native-style-tachyons'
import {replace} from 'ramda'

const Row = (props) => {
  return (
    <Link to={`/show?url=${props.url}&title=${props.title}`}>
      <View cls='jcc aifs'>
        <Text cls='f4 pv2 red'>{replace('Show HN: ', '', props.title)}</Text>
      </View>
    </Link>
  )
}

export default wrap(Row)
