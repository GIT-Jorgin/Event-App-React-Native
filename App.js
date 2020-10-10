import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Home from './src/pages/Home';
import Test from './src/pages/Test';
import Details from './src/pages/Details'

const Stack = createSharedElementStackNavigator();
const Tab = createMaterialTopTabNavigator();
const WH = Constants.statusBarHeight;

export default function App() {

  
  function MyTabBar({ state, descriptors, navigation }) {
    return (
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#A871CE', '#7A5BC1']} style={{flex: 1, width: '100%', alignItems: 'center', maxHeight: 89}}>
        <StatusBar style="light" />
        <View style={{flex: 1, flexDirection: 'row', paddingTop: 48.5, maxHeight: 100, width: '100%'}}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
    
            const isFocused = state.index === index;
    
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
    
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
    
            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1 , alignItems: 'center'}}
              >
                {route.name === 'Home' ?<FontAwesome name="ticket" size={24} color={isFocused ? '#FFF': '#C2BAD4'} style={{textAlign: 'center', marginTop: 5}} />
                : route.name === 'Event' ? <Entypo name="megaphone" size={24} color={isFocused ? '#FFF': '#C2BAD4'} style={{textAlign: 'center', marginTop: 5}} />
                : route.name === 'Mask' ? <FontAwesome5 name="theater-masks" size={24} color={isFocused ? '#FFF': '#C2BAD4'} style={{textAlign: 'center', marginTop: 5}} />
                : route.name === 'Film'? <MaterialCommunityIcons name="movie-roll" size={24} color={isFocused ? '#FFF': '#C2BAD4'} style={{textAlign: 'center', marginTop: 5}} />
                : <FontAwesome name="play-circle" size={24} color={isFocused ? '#FFF': '#C2BAD4'} style={{textAlign: 'center', marginTop: 5}} />}
                {isFocused && <View style={{position: 'absolute', width: 35, marginTop: 39, height: 2, backgroundColor: '#FFF', borderRadius: 10}}></View>}
              </TouchableOpacity>
            );
          })}
        </View>
      </LinearGradient>
    );
  }
  function MyHome(){
    return(
      <Tab.Navigator initialRouteName="Event" tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={Test} />
        <Tab.Screen name="Event" component={Home} />
        <Tab.Screen name="Mask" component={Test} />
        <Tab.Screen name="Film" component={Test} />
        <Tab.Screen name="Play" component={Test} />
      </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Home" component={MyHome}
/>
        <Stack.Screen name="Details" component={Details}
        options={navigation => ({
          cardStyleInterpolator: ({current: {progress}}) => {
            return{
              cardStyle: {
                opacity: progress
              }
            }
          }
        })}
        sharedElementsConfig = {( route ) => {
          const { item, id } = route.params;
          return [
            {
              id: `item.${id}.photo`,
              animation: 'move',
              resize: 'clip',
              align: 'center-top'
            },
          ];
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

