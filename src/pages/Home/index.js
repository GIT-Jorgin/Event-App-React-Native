import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { SharedElement } from 'react-navigation-shared-element';
import styles from './styles';

export default function Home({ navigation }) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const itemWidth = windowWidth - 100
  function renderItem({item, index}){
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', {item: item.img, id: item.id})}>
      <SharedElement id={`item.${item.id}.photo`}>
          <Image style={{width: itemWidth, height: 450, resizeMode: 'cover'}} imageStyle={{borderRadius: 15}} source={item.img} />
          </SharedElement>
            <View style={{flex: 1, padding: 15, justifyContent: 'space-between'}}>
              <View style={{padding: 5}}>
                <Text style={{color: '#FFF', marginTop: 10}}>LIVE</Text>
                <Text style={{color: '#FFF', fontSize: 40, fontWeight: 'bold'}}>{item.title}</Text>
                <Text style={{color: '#FFF', fontSize: 40, marginTop: -10, fontWeight: 'bold'}}>{item.local}</Text>
                <Text style={{width: 220, color: 'white', fontSize: 10}}>{item.description}</Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 5, alignItems: 'center'}}>
                <FontAwesome5 name="heart" size={24} color="white" />
                <Text style={{color: 'white', marginLeft: 5, marginTop: -3, fontSize: 12}}>10 000</Text>
                <View style={{width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', marginLeft: 'auto', alignItems: 'center', justifyContent: 'center'}}>
                  <Ionicons style={{marginLeft: 2.5}} name="ios-arrow-forward" size={24} color="#57555B" />
                </View>
              </View>
            </View>

          
      
      
      </TouchableOpacity>
  );
  }
  const data = [
    {id: 1, title: 'EDM', local: 'DUBAI', description: 'O maior evento de musica eletronica do mundo todos são Bem-Vindos aqui.', img: require('../../images/edmdotcom.jpg')},
    {id: 2, title: 'RAVE', local: 'BRAZIL', description: 'O maior evento de musica eletronica do mundo todos são Bem-Vindos aqui.', img: require('../../images/FESTIVAL.jpg')},
    {id: 3, title: 'PARTY', local: 'LONDON', description: 'O maior evento de musica eletronica do mundo todos são Bem-Vindos aqui.', img: require('../../images/edmdotcom.jpg')},

  ]
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#9856CA', '#5A38B9']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{width: '100%', height: 60, backgroundColor: 'black'}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <Text style={{letterSpacing: 1.2, fontSize: 10, color: '#D5D2DE', backgroundColor: '#A57BD4', padding: 5, paddingHorizontal: 25, borderRadius: 25}}>EVENTO</Text>
          <Text style={{letterSpacing: 1.2, fontSize: 10, color: '#FFF', padding: 5, paddingHorizontal: 25, borderRadius: 25}}>EXPERIÊNCIA</Text>
          <Text style={{letterSpacing: 1.2, fontSize: 10, color: '#FFF', padding: 5, paddingHorizontal: 25, borderRadius: 25}}>ATIVIDADE</Text>
        </View>
      </LinearGradient>
      <View style={{flexDirection: 'row', width: '80%'}}><Text style={{color: '#BCBBBD', marginTop: 20}}>RECOMENDADO</Text><Text style={{color: '#BCBBBD', marginTop: 20, marginLeft: 'auto'}}>VER TUDO <Ionicons style={{marginLeft: 2.5}} name="ios-arrow-forward" size={15} color="#BCBBBD" /></Text></View>
      <Carousel
      contentContainerCustomStyle={{marginTop: 20, justifyContent: 'center', marginLeft: 15}}
      inactiveSlideOpacity={0.2}
      layoutCardOffset={20}
      layout="stack"
      data={data}
      sliderWidth={windowWidth}
      itemWidth={itemWidth}
      renderItem={renderItem}
      />
    </View>
  );
}