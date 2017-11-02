import React, { Component } from 'react'
import {Button} from 'react-native'
import { TabNavigator } from 'react-navigation'

import {FormData} from './join_us_tabs/tab_data'
import Personal from './join_us_tabs/personal'
import Password from './join_us_tabs/password'
import Finance from './join_us_tabs/finance'

const JoinUsTabs = TabNavigator({
    Personal: {
        screen: Personal
    },
    Password: {
        screen: Password
    },
    Finance: {
        screen: Finance
    }},{
    tabBarPosition: 'top',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#e91e63',
        }
    }
);

export default class JoinUs extends Component {
    
    static navigationOptions = {
        title: 'Join Us',
        headerRight: <Button 
            title='Join Us'
            onPress={() => this.props.navigation.navigate('Loading')} />
    }

    render() {
        return (
            <JoinUsTabs />
        );
    }
}