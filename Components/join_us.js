import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import styles from './styles'

export default class JoinUs extends Component {
    static navigationOptions = {
        title: 'Join Us',
        tabBarPosition: "bottom"
    }

    constructor(props) {
        super(props)

        this.state = {
            firstname: 'Mine?',
            password: 'Be Cryptic',
            repassword: 'Can you remember?'
        }
    }

    _validate_first_name(firstname) {
        this.setState({firstname})
    }
    _validate_last_name() {}
    _validate_email() {}
    _validate_password(password) {
        this.setState({password})
    }
    _set_password(repassword) {
        this.setState({repassword})
    }
    _check_password(password) {
        if ( password === this.state.repassword ) {
            return 'We are all Good'
        }
        else {
            return 'You got it wrongz'
        }
    }

    render() {
        return (
        <View>
            <FormLabel>first name</FormLabel>
            <FormInput
                value={this.state.firstname}
                onChangeText={(firstname) => this._validate_first_name(firstname)}/>
            <FormValidationMessage>{this.state.firstname === 'Mine?' || '' ? 'Required' : ''}</FormValidationMessage>
            <FormLabel>last name</FormLabel>
            <FormInput onChangeText={this._validate_last_name()}/>
            <FormValidationMessage>{this.state.firstname === 'Mine?' ? 'Required' : ''}</FormValidationMessage>
            <FormLabel>email</FormLabel>
            <FormInput onChangeText={this._validate_email()}/>
            <FormValidationMessage>{this.state.firstname === 'Mine?' ? 'Required' : ''}</FormValidationMessage>
            <FormLabel>password</FormLabel>
            <FormInput
                value={this.state.password}
                onChangeText={(password) => this._validate_password(password)}/>
            <FormValidationMessage>{this.state.password === 'Be Cryptic' ? 'Required' : ''}</FormValidationMessage>
            <FormLabel>repeat password</FormLabel>
            <FormInput
                value={this.state.repassword}
                onChangeText={(repassword) => this._set_password(repassword)}/>
            <FormValidationMessage>
                { this._check_password(this.state.password) }
            </FormValidationMessage>
        </View>
        )
    }
}