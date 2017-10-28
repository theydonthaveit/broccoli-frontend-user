import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'

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
        title: 'Join Us'
    }

    render() {
        return <JoinUsTabs />;
    }
}