import React, { Component } from 'react'
import { Image, Button, StyleSheet, View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import { FormData } from './tab_data'

export default class Finance extends Component {
    static navigationOptions = {
        tabBarLabel: 'Finance',
    };

    _add_card_to_form_data(card) {
        FormData.card = card
    }

    _add_exp_to_form_data(exp) {
        FormData.exp = exp
    }

    _add_cvc_to_form_data(cvc) {
        FormData.cvc = cvc
    }

    render() {
        return (
            <View>
                <FormLabel>card number</FormLabel>
                <FormInput
                    onChangeText={(card) => this._add_card_to_form_data(card)}/>
                <FormValidationMessage>{}</FormValidationMessage>
                <FormLabel>expiry date</FormLabel>
                <FormInput
                    onChangeText={(exp) => this._add_exp_to_form_data(exp)}/>
                <FormValidationMessage>{}</FormValidationMessage>
                <FormLabel>cvc</FormLabel>
                <FormInput
                    onChangeText={(cvc) => this._add_cvc_to_form_data(cvc)}/>
                <FormValidationMessage>{}</FormValidationMessage>
            </View>
        );
    }
}
