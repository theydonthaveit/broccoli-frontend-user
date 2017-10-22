import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import Intro from './Components/intro'
import AboutUs from './Components/about_us'
import JoinUs from './Components/join_us'

const NavApp = StackNavigator({
  Home: { screen: Intro },
  AboutUs: { screen: AboutUs },
  JoinUs: { screen: JoinUs }  
})

export default class App extends Component {
  render() {
    return <NavApp />;
  }
}