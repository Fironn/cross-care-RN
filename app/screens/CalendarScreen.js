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
        ><Agenda
                // The list of items that have to be displayed in agenda. If you want to render item as empty date
                // the value of date key has to be an empty array []. If there exists no value for date key it is
                // considered that the date in question is not yet loaded
                items={{}}
                // Callback that gets called when items for a certain month should be loaded (month became visible)
                loadItemsForMonth={(month) => { console.log('trigger items loading') }}
                // Callback that fires when the calendar is opened or closed
                onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
                // Callback that gets called on day press
                onDayPress={(day) => { console.log('day pressed') }}
                // Callback that gets called when day changes while scrolling agenda list
                onDayChange={(day) => { console.log('day changed') }}
                // Initially selected day
                selected={'2020-05-8'}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={'2020-04-1'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={'2021-01-30'}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={50}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={50}
                // Specify how each item should be rendered in agenda
                renderItem={(item, firstItemInDay) => { return (<View />); }}
                // Specify how each date should be rendered. day can be undefined if the item is not first in that day.
                renderDay={(day, item) => { return (<View />); }}
                // Specify how empty date content with no items should be rendered
                renderEmptyDate={() => { return (<View />); }}
                // Specify how agenda knob should look like
                renderKnob={() => { return (<View />); }}
                // Specify what should be rendered instead of ActivityIndicator
                renderEmptyData={() => { return (<View />); }}
                // Specify your item comparison function for increased performance
                rowHasChanged={(r1, r2) => { return r1.text !== r2.text }}
                // Hide knob button. Default = false
                hideKnob={true}
                // By default, agenda dates are marked if they have at least one item, but you can override this if needed
                markedDates={{
                    '2012-05-16': { selected: true, marked: true },
                    '2012-05-17': { marked: true },
                    '2012-05-18': { disabled: true }
                }}
                // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
                disabledByDefault={true}
                // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
                onRefresh={() => console.log('refreshing...')}
                // Set this true while waiting for new data from a refresh
                refreshing={false}
                // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
                refreshControl={null}
                // Agenda theme
                theme={{
                    agendaDayTextColor: 'yellow',
                    agendaDayNumColor: 'green',
                    agendaTodayColor: 'red',
                    agendaKnobColor: 'blue'
                }}
                // Agenda container style
                style={{}}
            />

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