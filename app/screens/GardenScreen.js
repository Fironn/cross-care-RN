import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
// import '../component/onGoogleButtonPress.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Col, Row, Grid } from "react-native-easy-grid";

function GardenScreen({ route, navigation }) {
    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
        >
            <Grid>
                <Row style={{ height: hp('15%'), margin: 20, }}>
                    <Col style={{ width: wp('15%'), }}>
                        <Row>
                        </Row>
                        <Row style={{ height: hp('10%'), }}>
                        </Row>
                        <Row>
                        </Row>
                    </Col>
                    <Col style={{ width: wp('65%'), }}>
                        <Row>
                        </Row>
                        <Row style={{ height: hp('10%'), }}>
                        </Row>
                    </Col>
                    <Col style={{ width: wp('10%'), }}>
                        <Row>
                            <Button
                                title="goto Egg"
                                onPress={() => navigation.navigate('Egg')}
                            />
                        </Row>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'space-around', alignItems: 'center', textAlign: 'center', }}>
                </Row>
            </Grid>
        </SafeAreaView >
    );
}

export default GardenScreen;


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