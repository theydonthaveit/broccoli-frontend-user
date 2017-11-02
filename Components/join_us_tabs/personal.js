import React, { Component } from 'react'
import { Image, Button, StyleSheet, View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import { FormData } from './tab_data'
import style from '../styles'

export default class Personal extends Component {
    static navigationOptions = {
        tabBarLabel: 'Personal',
    };

    _add_firstname_to_form_data(firstname) {
        FormData.firstname = firstname
    }

    _add_lastname_to_form_data(lastname) {
        FormData.lastname = lastname
    }

    _add_email_to_form_data(email) {
        FormData.email = email
    }

    render() {
        return (
            <View>
                <FormLabel>First Name</FormLabel>
                <FormInput
                    onChangeText={(firstname) => this._add_firstname_to_form_data(firstname)}/>
                <FormValidationMessage>{}</FormValidationMessage>
                <FormLabel>Last Name</FormLabel>
                <FormInput
                    onChangeText={(lastname) => this._add_lastname_to_form_data(lastname)}/>
                <FormValidationMessage>{}</FormValidationMessage>
                <FormLabel>Email</FormLabel>
                <FormInput
                    onChangeText={(email) => this._add_email_to_form_data(email)}/>
                <FormValidationMessage>{}</FormValidationMessage>
            </View>
        );
    }
}
