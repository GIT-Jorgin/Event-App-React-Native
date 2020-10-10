import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import styles from './styles';
import IMG from '../../images/FESTIVAL.jpg';

export default function Details({navigation, route}) {
    const { item, id } = route.params;
    return (
        <View>
            <StatusBar style="light" />
            <SharedElement id={`item.${id}.photo`}>
                <Image style={{ resizeMode: 'cover', width: '100%' }} source={item} />
            </SharedElement>
        </View>
    )
}