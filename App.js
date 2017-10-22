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
      <View style={styles.image}>
        <View>
          <Text style={styles.text}>community</Text>
          <Text style={styles.text}>Why not be apart of the community?</Text>
        </View>
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
      </View>
    )
  }
}

class IntroImageSecond extends Component {
  render() {
    return (
        <View style={styles.image}>
          <Text style={styles.text}>welcome</Text>
          <Text style={styles.text}>welcome to foodtech</Text>
        </View>
    )
  }
}

class IntroImageFirst extends Component {
  render() {
    return (
        <View style={styles.image}>
          <Text style={styles.text}>foodtech</Text>
          <Text style={styles.text}>innovating food services</Text>
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
          <IntroImageFirst />
          <IntroImageSecond />
          <IntroImagesJoin />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height
  },
  image: {
    paddingTop: ((height/8) *0.4),
    flex: 1,
    width,
    height
  },
  buttonPlacement: {
    flexDirection: 'row',
    paddingTop: ((height/8) *5)
  },
  text: {
    paddingLeft: 5,
    fontSize: 20,
    color: 'white'
  }
})