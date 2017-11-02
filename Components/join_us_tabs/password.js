import React, { Component } from 'react'
import { Image, Button, StyleSheet, View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import { FormData } from './tab_data'

export default class Password extends Component {
    static navigationOptions = {
        tabBarLabel: 'Password',
    };

    state = {
        password: '',
        repassword: ''
    }

    _add_password_to_form_data(password) {
        this.setState({password})
        
        FormData.password = password
    }

    render() {
        return (
            <View>
                <FormLabel>Password</FormLabel>
                <FormInput
                    onChangeText={(password) => this._add_password_to_form_data(password)}/>
                <FormValidationMessage>{}</FormValidationMessage>
                <FormLabel>Re-Password</FormLabel>
                <FormInput
                    onChangeText={(repassword) => this.setState({repassword})}/>
            </View>
        );
    }
}
