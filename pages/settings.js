import React, {Component} from 'react'
import { View, Text, ListView, Switch } from 'react-native'
import { Link } from 'react-router-native'
import { wrap } from 'react-native-style-tachyons'
import { Constants } from 'expo'

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})
const data = ds.cloneWithRows([
  { id: 1, name: 'Javascript'},
  { id: 2, name: 'Ramda'},
  { id: 3, name: 'Clojure'}
])

const Row = wrap(props => {
  return (
    <View cls='bb flx-row jcsb aic'>
      <Text cls='f4 pv2'>{props.name}</Text>
      <Switch />
    </View>
  )
})

class Settings extends Component {
  componentDidMount() {

  }

  render() {
    return(
      <View>
        <View cls='flx-row h3 bg-lightblue jcsb aic'
          style={{ paddingTop: Constants.statusBarHeight}}>
          <Text cls='f4 ml3'>Settings</Text>
          <Link to='/' cls=''>
            <Text cls='mr3'>close</Text>
          </Link>
        </View>
        <ListView cls='mt2 ml2'
          dataSource={data}
          renderRow={( {id, ...item}) => {
            return (
              <Row key={id} id={id} {...item}  />
            )
          }}
        />
      </View>
    )
  }
}

export default wrap(Settings)
