import React, { Component } from 'react'
import { Text, Button, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')

class IntroImagesJoin extends Component {
  _aboutUs() {
    console.log('you want to know more')
  }

  _joinUs() {
    console.log('you want to join us')
  }

  render() {
    return (
      <Image style={styles.image} source={{uri: this.props.imageSrc}}>
        <View style={styles.buttonPlacement}>
          <Button
            onPress={this._aboutUs}
            title="ABOUT US"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={this._joinUs}
            title="JOIN US"
            color="#000"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </Image>
    )
  }
}

class IntroImageSecond extends Component {
  render() {
    return (
      <View>
        <Image style={styles.image} source={{uri: this.props.imageSrc}} />
      </View>
    )
  }
}

class IntroImageFirst extends Component {
  render() {
    return (
      <View>
        <Image style={styles.image} source={{uri: this.props.imageSrc}} />
      </View>
    )
  }
}

export default class App extends Component {
  // constructor() {
  //   super()
  // }

  // componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          <IntroImageFirst imageSrc='http://blog.truephotography.com/wp-content/uploads/2011/02/4be22064-0ec4-481a-9b5a-623143cfd45a-1-600x400.jpg' />
          <IntroImageSecond imageSrc='http://images.dailyhive.com/20160915073851/smoothie.jpg' />
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
  },
  buttonPlacement: {
    flexDirection: 'row',
    paddingTop: ((height/8) *6)
  }
})