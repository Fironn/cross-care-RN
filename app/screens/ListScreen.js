import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Col, Row, Grid } from "react-native-easy-grid";


const users = [
    { name: 'hide', level: 21, },
    { name: 'tako', level: 1, },
    { name: 'kiyo', level: 11, },
    { name: 'yosi', level: 10, },
    { name: 'yosi', level: 10, },
    { name: 'yosi', level: 10, },
    { name: 'yosi', level: 10, },
    { name: 'taki', level: 5, },
];

function ListScreen({ route, navigation }) {
    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
        >
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                    {users.map((value, index) => (
                        <View key={index} style={{ flex: 1, height: 200, flexBasis: 130, borderColor: 'red', borderWidth: 1, }}>
                            <View><Text>{value.name}</Text></View>
                            <View><Text>{value.level}</Text></View>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
        </SafeAreaView >
    );
}

export default ListScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },
});