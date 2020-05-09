import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Button, Overlay } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var items = {}
function CalendarScreen({ route, navigation }) {
    const [planVisible, setPlanVisible] = useState(false);

    const PlanPopup = () => {
        setPlanVisible(!planVisible);
    };

    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
        >
            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button title="Open Overlay" onPress={PlanPopup} />
            <Overlay overlayStyle={{ width: wp('80%'), height: hp('80%') }} isVisible={planVisible} onBackdropPress={PlanPopup}>
                <Text>この日の目標をたてましょう</Text>
                <Button title="close Overlay" onPress={PlanPopup} />
            </Overlay>
        </SafeAreaView>
    );
}

export default CalendarScreen;