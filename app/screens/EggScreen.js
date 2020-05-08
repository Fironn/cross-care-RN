import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Text, Button, Overlay } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Col, Row, Grid } from "react-native-easy-grid";

const data = {
    level: 4,
    userName: 'ユーザーネーム',
    eggName: '名前',
    point: 30,
    eggs: [
        {
            type: 1,
        },
        {
            type: 3,
        },
        {
            type: 1,
        },
        {
            type: 2,
        },
        {
            type: 5,
        }
    ],
}

const img = [require('../data/img/1.png'), require('../data/img/2.png'), require('../data/img/3.png')];

function EggScreen({ route, navigation }) {

    const [eggVisible, setEggVisible] = useState(false);
    const [dailyVisible, setDailyVisible] = useState(false);

    const EggPopup = () => {
        setEggVisible(!eggVisible);
    };

    const DailyPopup = () => {
        setDailyVisible(!dailyVisible);
    };

    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
        >
            <Grid>
                <Row style={{ height: hp('15%'), margin: 20, }}>
                    <Col style={{ width: wp('15%'), }}>
                        <Row>
                            <Text id="levelTag">Lv.</Text>
                        </Row>
                        <Row style={{ height: hp('10%'), }}>
                            <Text h1 h1Style={styles.h1}>{data.level}</Text>
                        </Row>
                        <Row>
                            <Text>{data.point}</Text>
                        </Row>
                    </Col>
                    <Col style={{ width: wp('65%'), }}>
                        <Row>
                            <Text h3 h3Style={styles.h3}>{data.userName}</Text>
                        </Row>
                        <Row style={{ height: hp('10%'), }}>
                            <Text h2 h2Style={styles.h2}>{data.eggName}</Text>
                            {/* <canvas id="levelBar"></canvas> */}
                        </Row>
                    </Col>
                    <Col style={{ width: wp('10%'), }}>
                        <Row>
                            <Button
                                title="goto Garden"
                                onPress={() => navigation.navigate('Garden')}
                            />
                        </Row>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'space-around', alignItems: 'center', textAlign: 'center', }}>
                    <Image
                        source={img[0]}
                        style={{ height: hp('60%'), resizeMode: 'contain', }}
                    />
                </Row>
            </Grid>

            <Button title="Open Overlay" onPress={EggPopup} />
            <Overlay overlayStyle={{ width: wp('80%'), height: hp('80%') }} isVisible={eggVisible} onBackdropPress={EggPopup}>
                <Text>育てるたまごをえらんでください</Text>
                <Button title="close Overlay" onPress={EggPopup} />
                <ScrollView style={{ marginHorizontal: 20 }}>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                        {data.eggs.map((value, index) => (
                            <View key={index} style={{ flex: 1, height: 150, flexBasis: 80, borderColor: 'red', borderWidth: 1, }}>
                                <View><Text>{value.type}</Text></View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </Overlay>

            <Button title="Open Overlay" onPress={DailyPopup} />
            <Overlay overlayStyle={{ width: wp('80%'), height: hp('80%') }} isVisible={dailyVisible} onBackdropPress={DailyPopup}>
                <Text>今日はどんな日でしたか？</Text>
                <Button title="close Overlay" onPress={DailyPopup} />
                <ScrollView style={{ marginHorizontal: 20 }}>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                    </View>
                </ScrollView>
            </Overlay>

            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
        </SafeAreaView >
    );
}

export default EggScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },
    detail: {
        textAlign: "left",
        height: hp("20%"),
    },
    h1: {
        fontSize: RFValue(50, 580),
    },
    h2: {
        fontSize: RFValue(30, 580),
    },
    h3: {
        fontSize: RFValue(18, 580),
    }
});