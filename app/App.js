import React from 'react';
import { TextInput, Platform, StyleSheet, YellowBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen.js';
import ListScreen from './screens/ListScreen.js';
import SettingScreen from './screens/SettingScreen.js';
import GardenScreen from './screens/GardenScreen.js';
import EggScreen from './screens/EggScreen.js';
import CalendarScreen from './screens/CalendarScreen.js';
import ErrorBoundary from './ErrorBoundary.js';
import './data/client_id.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

var MYAPP = MYAPP || {};

MYAPP.common = {
}

MYAPP.event = {
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <ErrorBoundary>
            <Stack.Navigator initialRouteName="Start" headerMode="none">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Start">
                {() => (
                  <Tab.Navigator initialRouteName="Calendar">
                    <Tab.Screen name="Calendar" component={CalendarScreen} />
                    <Tab.Screen name="Eggs">
                      {() => (
                        <Stack.Navigator initialRouteName="Egg" headerMode="none">
                          <Stack.Screen name="Egg" component={EggScreen} />
                          <Stack.Screen name="Garden" component={GardenScreen} />
                        </Stack.Navigator>
                      )}
                    </Tab.Screen>
                    <Tab.Screen name="List" component={ListScreen} />
                    <Tab.Screen name="Setting" component={SettingScreen} />
                  </Tab.Navigator>
                )}
              </Stack.Screen>
            </Stack.Navigator>
          </ErrorBoundary>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

export default App;