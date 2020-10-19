import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
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
          <Image style={styles.carouselItem} source={item.img} />
          </SharedElement>
          <View style={styles.carouselContent}>
            <View style={styles.carouselContentContainer}>
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
      <View style={styles.category}>
        <Text style={styles.categoryText}>CATEGORIAS</Text>
        <View style={styles.categoryContent}>
          <ImageBackground style={styles.categoryItemImage} imageStyle={{borderRadius: 10}} source={EDM} >
            <Text style={styles.categoryItemText}>ELECTRONIC DANCE MUSIC</Text>
          </ImageBackground>
          <ImageBackground style={styles.categoryItemImage} imageStyle={{borderRadius: 10}} source={sertanejo} >
            <Text style={styles.categoryItemText}>SERTANEJO</Text>
          </ImageBackground>
        </View>
        <View style={{width: '90%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginBottom: 20}}>
        <ImageBackground style={styles.categoryItemImage} imageStyle={{borderRadius: 10}} source={rap} >
          <Text style={styles.categoryItemText}>RAP</Text>
        </ImageBackground>  
        <ImageBackground style={styles.categoryItemImage} imageStyle={{borderRadius: 10}} source={funk} >
          <Text style={styles.categoryItemText}>FUNK</Text>
        </ImageBackground>
        </View>
      </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <AntDesign name="home" size={27} color="#AA00FF" />
        <Ionicons name="ios-search" size={27} color="#7B7B7B" />
        <FontAwesome5 name="user-alt" size={27} color="#7B7B7B" />
        <AntDesign name="bars" size={27} color="#7B7B7B" />
      </View>
    </View>
  );
}