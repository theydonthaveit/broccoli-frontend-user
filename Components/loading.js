import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'

import styles from './styles'

export default class Loading extends Component {
    render() {
        return (
            <View style={styles.intro.image}>
                <ActivityIndicator />
            </View>
        )
    }
}