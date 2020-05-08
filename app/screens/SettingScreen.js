import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, ListItem } from 'react-native-elements';
// import '../component/onGoogleButtonPress.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Col, Row, Grid } from "react-native-easy-grid";

const data = {
    name: '名前',
    eggName: 'たまごの名前',
}
function HomeScreen({ route, navigation }) {


    const list = [
        {
            title: 'Credit',
            icon: 'av-timer'
        },
        {
            title: 'Trips',
            icon: 'flight-takeoff'
        },
    ];


    return (
        <SafeAreaView
            style={{ flex: 1 }}
        >
            <View>
                <ListItem
                    key={0}
                    title={data.name}
                    subtitle={data.eggName}
                    bottomDivider
                />
                {
                    list.map((item, i) => (
                        <ListItem
                            key={i + 1}
                            title={item.title}
                            leftIcon={{ name: item.icon }}
                            bottomDivider
                            chevron
                        />
                    ))
                }
            </View>
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