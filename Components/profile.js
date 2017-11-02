import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { FormData } from './join_us_tabs/tab_data'

export default class Profile extends Component {
    static navigationOptions = {
        title: 'Welcome' + FormData.firstname
    }

    render() {
        return (
            <View>
                <Text>Profile</Text>
            </View>
        )
    }
}