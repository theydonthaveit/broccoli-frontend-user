import React, { Component } from 'react'
import { Text, Button, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')

class IntroImagesJoin extends Component {
  render() {
    return (
      <Image style={styles.image} source={{uri: this.props.imageSrc}} />
    )
  }
}

class IntroImages extends Component {
  render() {
    return (
      <Image style={styles.image} source={{uri: this.props.imageSrc}} /> 
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          <IntroImages imageSrc='http://blog.truephotography.com/wp-content/uploads/2011/02/4be22064-0ec4-481a-9b5a-623143cfd45a-1-600x400.jpg' />
          <IntroImages imageSrc='http://images.dailyhive.com/20160915073851/smoothie.jpg' />
          <IntroImagesJoin imageSrc='http://s2.r29static.com//bin/entry/87b/406x487,80/1741652/image.jpg' />
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height
  },
  image: {
    width,
    height
  }
})