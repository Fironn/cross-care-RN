import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be whitelisted in the Firebase Console.
        url: 'https://www.example.com/finishSignUp?cartId=1234',
        // This must be true.
        handleCodeInApp: true,
        iOS: {
            bundleId: 'org.reactjs.native.example.crossCare'
        },
        android: {
            packageName: 'com.example.android',
            installApp: true,
            minimumVersion: '12'
        },
        dynamicLinkDomain: 'example.page.link'
    };


    const login = () => {
        if (email.length > 0 && password.length > 0)
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('User account created & signed in!');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });
    }

    const signup = () => {
        if (email.length > 0 && password.length > 0)
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('User account created & signed in!');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });
    }

    return (
        <View>
            <Input
                placeholder='Email'
                onChangeText={e => setEmail(e)}
            />
            <Input
                placeholder='Password'
                onChangeText={p => setPassword(p)}
            />
            <Button
                title="Login"
                onPress={login}
            />
            <Button
                title="Signup"
                onPress={signup}
            />
        </View >

    );
}

export default SignInScreen;