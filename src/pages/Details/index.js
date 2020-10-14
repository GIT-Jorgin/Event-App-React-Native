import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Animatable from 'react-native-animatable';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, TouchableHighlight, FlatList } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { LinearGradient } from 'expo-linear-gradient';
import TouchableScale from 'react-native-touchable-scale';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const zoomIn = {
    0: {
        opacity: 0,
        scale: 0.5
    },
    1: {
        opacity: 1,
        scale: 1
    }
}
export default function Details({ navigation, route }) {
    const DATA = [
        {id: 1, title: 'ENTRADA FRANCA', description: 'Os portões se abrem as 18:00 Hrs', icon: require('../../images/ticket.jpg')},
        {id: 2, title: 'AREA VIP OPEN BAR', description: 'Test Test Etsta ttast ats', icon: require('../../images/vip.jpg')},
        {id: 3, title: 'BAR NO LOCAL', description: 'Test Test Etsta ttast ats', icon: require('../../images/drink.jpg')},
    ]
    function renderItem({ item, index }){
        return(
            <Animatable.View animation={zoomIn} duration={500} delay={250 + (index * 150)} style={{marginTop: 20, alignItems: 'center'}}>
                <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} colors={['#7A5BC1', '#A871CE']} style={{width: '95%', height: 110, borderRadius: 15, alignItems: 'center', flexDirection: 'row'}}>
                    <View style={{width: 110, height: 110}}>
                        <Image style={{width: 110, height: 110, borderTopLeftRadius: 15, borderBottomLeftRadius: 15}} source={item.icon} />
                    </View>
                    <View>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: 10}}>{item.title}</Text>
                        <Text style={{color: 'white', fontSize: 15, marginLeft: 10, marginTop: 10}}>{item.description}</Text>
                    </View>
                </LinearGradient>
            </Animatable.View>
        )
    }
    const navigate = useNavigation();
    const { data } = route.params;
    return (
        <View style={{flex: 1}}>
            <StatusBar style="light" />
            <TouchableScale style={{height: '50%'}} activeScale={0.93} tension={130} friction={5} onPress={() => navigate.goBack()}>
                <SharedElement id={`item.${data.id}.photo`}>
                    <Image style={{ resizeMode: 'cover', width: '100%', borderRadius: 25, height: '100%' }} source={data.img} />
                </SharedElement>

                <View style={{ width: '100%', height: '100%', position: 'absolute'}}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ padding: 5 }}>
                            <SharedElement id={`item.${data.id}.title`}>
                                <Text style={{ color: '#FFF', fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>{data.title}</Text>
                            </SharedElement>
                            <SharedElement id={`item.${data.id}.local`}>
                                <Text style={{ color: '#FFF', fontSize: 40, marginTop: -10, fontWeight: 'bold', textAlign: 'center' }}>{data.local}</Text>
                            </SharedElement>
                            <SharedElement id={`item.${data.id}.description`}>
                                <Text style={{ width: 220, color: 'white', fontWeight: 'bold', fontSize: 12, textAlign: 'center' }}>{data.description}</Text>
                            </SharedElement>
                        </View>
                    </View>
                </View>
            </TouchableScale>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}