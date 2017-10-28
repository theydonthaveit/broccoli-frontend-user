import React, { Component } from 'react'
import { Image, Button, StyleSheet, View } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26
    }
});

export default class Password extends Component {
    static navigationOptions = {
        tabBarLabel: 'Password',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={{uri: 'https://image.flaticon.com/icons/png/128/25/25297.png'}}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View>
                <FormLabel>Password</FormLabel>
                <FormInput
                    value='password'
                    onChangeText={(card) => console.log(card)}/>
                <FormValidationMessage>{}</FormValidationMessage>
                <FormLabel>Re-Password</FormLabel>
                <FormInput
                    value='re-password'
                    onChangeText={(exp) => console.log(exp)}/>
                <FormValidationMessage>{}</FormValidationMessage>
            </View>
        );
    }
}
