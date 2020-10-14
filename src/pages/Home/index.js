import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import * as Animatable from 'react-native-animatable';
import {AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { SharedElement } from 'react-navigation-shared-element';
import styles from './styles';
import EDM from '../../images/EDM.jpg';
import funk from '../../images/funk.jpg';
import sertanejo from '../../images/sertanejo.jpg';
import rap from '../../images/rap.jpg';

export default function Home({ navigation }) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const itemWidth = windowWidth - 100
  function renderItem({item, index}){
    return (
      <TouchableScale tension={50} onPress={() => navigation.navigate('Details', {data: item})}>
      <SharedElement id={`item.${item.id}.photo`}>
          <Image style={{width: itemWidth, height: 450, resizeMode: 'cover', borderRadius: 25}} source={item.img} />
          </SharedElement>
          <View style={{width: '100%', height: '100%', position: 'absolute'}}>
            <View style={{flex: 1, padding: 15, justifyContent: 'space-between'}}>
                <View style={{padding: 5}}>
                  <Text style={{color: '#FFF', marginTop: 10}}>LIVE</Text>
                  <SharedElement id={`item.${item.id}.title`}>
                    <Text style={{color: '#FFF', fontSize: 40, fontWeight: 'bold'}}>{item.title}</Text>
                  </SharedElement>
                  <SharedElement id={`item.${item.id}.local`}>
                    <Text style={{color: '#FFF', fontSize: 40, marginTop: -10, fontWeight: 'bold'}}>{item.local}</Text>
                  </SharedElement>
                  <SharedElement id={`item.${item.id}.description`}>
                    <Text style={{width: 220, color: 'white', fontSize: 10}}>{item.description}</Text>
                  </SharedElement>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 5, alignItems: 'center'}}>
                  <FontAwesome5 name="heart" size={24} color="white" />
                  <Text style={{color: 'white', marginLeft: 5, marginTop: -3, fontSize: 12}}>10 000</Text>
                  <View style={{width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', marginLeft: 'auto', alignItems: 'center', justifyContent: 'center'}}>
                    <Ionicons style={{marginLeft: 2.5}} name="ios-arrow-forward" size={24} color="#57555B" />
                  </View>
                </View>
              </View>
          </View>
      </TouchableScale>
  );
  }
  const data = [
    {id: 1, title: 'EDM', local: 'DUBAI', description: 'O maior evento de musica eletronica do mundo todos são Bem-Vindos aqui.', img: require('../../images/festival.png')},
    {id: 2, title: 'RAVE', local: 'BRAZIL', description: 'O maior evento de musica eletronica do mundo todos são Bem-Vindos aqui.', img: require('../../images/FESTIVAL.jpg')},
    {id: 3, title: 'PARTY', local: 'LONDON', description: 'O maior evento de musica eletronica do mundo todos são Bem-Vindos aqui.', img: require('../../images/edmdotcom.jpg')},

  ]
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient colors={['#9856CA', '#5A38B9']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{width: '100%', height: 60, backgroundColor: 'black'}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <Text style={{letterSpacing: 1.2, fontSize: 10, color: '#D5D2DE', backgroundColor: '#A57BD4', padding: 5, paddingHorizontal: 25, borderRadius: 25}}>EVENTO</Text>
          <Text style={{letterSpacing: 1.2, fontSize: 10, color: '#FFF', padding: 5, paddingHorizontal: 25, borderRadius: 25}}>EXPERIÊNCIA</Text>
          <Text style={{letterSpacing: 1.2, fontSize: 10, color: '#FFF', padding: 5, paddingHorizontal: 25, borderRadius: 25}}>ATIVIDADE</Text>
        </View>
      </LinearGradient>
      <ScrollView style={{paddingBottom: 50}}>
      <View style={{flexDirection: 'row', width: '80%', marginLeft: 35}}><Text style={{color: '#BCBBBD', marginTop: 20}}>RECOMENDADO</Text><Text style={{color: '#BCBBBD', marginTop: 20, marginLeft: 'auto'}}>VER TUDO <Ionicons style={{marginLeft: 2.5}} name="ios-arrow-forward" size={15} color="#BCBBBD" /></Text></View>
      <Carousel
      collapsable={false}
      firstItem={2}
      contentContainerCustomStyle={{marginTop: 20, justifyContent: 'center', marginLeft: 15}}
      inactiveSlideOpacity={0.2}
      layoutCardOffset={20}
      layout="stack"
      data={data}
      sliderWidth={windowWidth}
      itemWidth={itemWidth}
      renderItem={renderItem}
      />
      <View style={{width: '100%', alignItems: 'center', marginTop: 20}}>
        <Text style={{marginRight: 'auto', marginLeft: 20, color: '#BCBBBD', marginBottom: 10}}>CATEGORIAS</Text>
        <View style={{width: '90%', flexDirection: 'row', justifyContent: 'space-between'}}>
          <ImageBackground style={{ width: 180, height: 220, alignItems: 'center', justifyContent: 'center'}} imageStyle={{borderRadius: 10}} source={EDM} >
            <Text style={{color: 'white', width: 170, textAlign: 'center', fontSize: 20}}>ELECTRONIC DANCE MUSIC</Text>
          </ImageBackground>
          <ImageBackground style={{ width: 180, height: 220, alignItems: 'center', justifyContent: 'center'}} imageStyle={{borderRadius: 10}} source={sertanejo} >
            <Text style={{color: 'white', width: 170, textAlign: 'center', fontSize: 20}}>SERTANEJO</Text>
          </ImageBackground>
        </View>
        <View style={{width: '90%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginBottom: 20}}>
        <ImageBackground style={{ width: 180, height: 220, alignItems: 'center', justifyContent: 'center'}} imageStyle={{borderRadius: 10}} source={rap} >
          <Text style={{color: 'white', width: 170, textAlign: 'center', fontSize: 20}}>RAP</Text>
        </ImageBackground>  
        <ImageBackground style={{ width: 180, height: 220, alignItems: 'center', justifyContent: 'center'}} imageStyle={{borderRadius: 10}} source={funk} >
          <Text style={{color: 'white', width: 170, textAlign: 'center', fontSize: 20}}>FUNK</Text>
        </ImageBackground>
        </View>
      </View>
      </ScrollView>
      <View style={{shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24, width: '100%', height: 60, borderTopLeftRadius: 25, borderTopRightRadius: 25, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <Animatable.View animation="slideInUp" duration={500} delay={500}><AntDesign name="home" size={27} color="#AA00FF" /></Animatable.View>
        <Animatable.View animation="slideInUp" duration={500} delay={500}><Ionicons name="ios-search" size={27} color="#7B7B7B" /></Animatable.View>
        <Animatable.View animation="slideInUp" duration={500} delay={500}><FontAwesome5 name="user-alt" size={27} color="#7B7B7B" /></Animatable.View>
        <Animatable.View animation="slideInUp" duration={500} delay={500}><AntDesign name="bars" size={27} color="#7B7B7B" /></Animatable.View>
      </View>
    </View>
  );
}