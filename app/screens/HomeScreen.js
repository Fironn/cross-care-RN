import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
// import '../component/onGoogleButtonPress.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Col, Row, Grid } from "react-native-easy-grid";

function HomeScreen({ route, navigation }) {
    return (
        <SafeAreaView
            style={{ flex: 1 }}
        >
            <Grid style={styles.container}>
                <Row style={{
                    height: hp('65%'),
                    alignItems: 'center',
                }}
                >
                    <View style={styles.title}>
                        <Text style={styles.subTitle}>みんなで育てるひよっこ広場</Text>
                        <Text h1 h1Style={styles.h1}>Cross</Text>
                        <Text h1 h1Style={styles.h1}>Care</Text>
                    </View>
                    {/* <Button
                title="Google Sign-In"
            // onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
            /> */}
                </Row>
                <Row
                    style={styles.buttons}
                >
                    <Button
                        containerStyle={styles.button}
                        title="タップしてスタート"
                        onPress={() => navigation.navigate('Start')}
                    />
                </Row>
            </Grid>
        </SafeAreaView >
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },
    title: {
        top: hp('8%'),
        // color: "var(--main-color1)",
        textAlign: "center",
        alignItems: 'center',
    },
    h1: {
        fontSize: RFValue(80, 580),
        letterSpacing: 4,
    },
    subTitle: {
        fontSize: RFValue(15, 580),
        letterSpacing: 4,
    },
    button: {
        marginHorizontal: 10,
    },
    buttons: {
        alignItems: 'flex-end',
        marginHorizontal: 40,
    }
});