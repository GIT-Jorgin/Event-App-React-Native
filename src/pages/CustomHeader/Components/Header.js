import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from "react-native";

const WH = Constants.statusBarHeight

const Header = props => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.tabContainer}>
        <View>
          <Text><FontAwesome name="ticket" size={24} color="#C7BFDA" /></Text>
        </View>
        <View>
          <Text><Entypo name="megaphone" size={24} color="white" /></Text>
        </View>
        <View>
          <Text><FontAwesome5 name="theater-masks" size={24} color="#C7BFDA" /></Text>
        </View>
        <View>
          <Text><MaterialCommunityIcons name="movie-roll" size={24} color="#C7BFDA" /></Text>
        </View>
        <View>
          <Text><Ionicons name="md-play-circle" size={24} color="#C7BFDA" /></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    containerHeader: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    tabContainer: {
      width: "90%",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      height: "20%",
      alignItems: "center",
      marginTop: WH+ 10,
      height: 40
    }
  });
  export default Header;