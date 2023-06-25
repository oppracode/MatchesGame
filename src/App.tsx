import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {store} from './redux/store';
import GameScreen from './screens/GameScreen';
import SettingsScreen from './screens/SettingsScreen';
import SettingsTabIcon from './icons/SettingsTabIcon';
import GameTabIcon from './icons/GameTabIcon';

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: 'blue', // Customize the active tab color
              tabBarInactiveTintColor: 'gray', // Customize the inactive tab color
            }}>
            <Tab.Screen
              name="Game"
              component={GameScreen}
              options={{
                tabBarIcon: GameTabIcon,
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                tabBarIcon: SettingsTabIcon,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
