import React, { Component } from 'react'
import { wrap } from 'react-native-style-tachyons'
import { View, Text, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import { Constants } from 'expo'

const readme = `
# Fun with Parker Bear and Charleston Parks Conservancy

This is a web application to help connect children and families with Charleston's parks.

I built this application to highlight the technical skills learned at the JRS Code Bootcamp including;
- Database technology; CouchDb is used here but we also learned mySQL
- Functional Javascript including libraries like Ramda, Moment and Tachyons
- Git and Github, CLI (iTerm), Text Editors (Atom), Node.js and NPM
- React/Redux and a RESTful API

## Parker and Parks
## User Story: LogIn, Log user in (landing page)
As a child I need to log into the app so that I can view list of parks I have visited in the past.
See (view park list) TODO (wireframe)
`


class Show extends Component {

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
          <Text cls='ma2'>{readme}</Text>
        </ScrollView>
      </View>
    )
  }
}

export default wrap(Show)
