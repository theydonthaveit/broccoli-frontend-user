import React, { Component } from 'react'
import { Image, Button, StyleSheet, View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import { FormData } from './tab_data'

const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26
    }
});

export default class Finance extends Component {
    static navigationOptions = {
        tabBarLabel: 'Finance',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={{uri: 'https://image.flaticon.com/icons/png/128/25/25297.png'}}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    _add_card_to_form_data(card) {
        FormData.card = card
    }

    _submit_form() {
        console.log(JSON.stringify(FormData))
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
                    value='EXP'
                    onChangeText={(exp) => console.log(exp)}/>
                <FormValidationMessage>{}</FormValidationMessage>
                <FormLabel>cvc</FormLabel>
                <FormInput
                    value='CVC'
                    onChangeText={(cvc) => console.log(cvc)}/>
                <FormValidationMessage>{}</FormValidationMessage>

                <Button
                    onPress={() => this._submit_form()}
                    title="Join"
                />
            </View>
        );
    }
}
