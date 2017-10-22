import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

import styles from './styles'

export default class JoinUs extends Component {
    static navigationOptions = {
        title: 'Join Us',
        tabBarPosition: "bottom"
    }

    render() {
        return (
        <View style={styles.intro.container}>
            <Text>Join Us</Text>
        </View>
        )
    }
}