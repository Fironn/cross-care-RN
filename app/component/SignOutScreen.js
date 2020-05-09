import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

function SignOutScreen() {

    const logout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'))
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <View>
            <Button
                title="Logout"
                onPress={logout}
            />
        </View >

    );
}

export default SignOutScreen;