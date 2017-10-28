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

export default class Personal extends Component {
    static navigationOptions = {
        tabBarLabel: 'Personal',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={{uri: 'https://image.flaticon.com/icons/png/128/25/25297.png'}}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    _add_firstname_to_form_data(firstname) {
        FormData.firstname = firstname
    }

    render() {
        return (
            <View>
                <FormLabel>First Name</FormLabel>
                <FormInput
                    onChangeText={(firstname) => this._add_firstname_to_form_data(firstname)}/>
                <FormValidationMessage>{}</FormValidationMessage>
                <FormLabel>Last Night</FormLabel>
                <FormInput
                    value='Williams'
                    onChangeText={(exp) => console.log(exp)}/>
                <FormValidationMessage>{}</FormValidationMessage>
                <FormLabel>Email</FormLabel>
                <FormInput
                    value='alan@gmail.com'
                    onChangeText={(cvc) => console.log(cvc)}/>
                <FormValidationMessage>{}</FormValidationMessage>
            </View>
        );
    }
}
