import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 100
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1EEEE',
        alignItems: 'center',
      },
      carouselItem:{
        width: itemWidth,
        height: 450,
        resizeMode: 'cover',
        borderRadius: 25
      },
      carouselContent: {
        width: '100%',
        height: '100%',
        position: 'absolute'
      },
      carouselContentContainer: {
        flex: 1,
        padding: 15,
        justifyContent: 'space-between'
      },
      category:{
        width: '100%',
        alignItems: 'center',
        marginTop: 20
      },
      categoryText:{
        marginRight: 'auto',
        marginLeft: 20,
        color: '#BCBBBD',
        marginBottom: 10
      },
      categoryContent: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      categoryItemImage: {
        width: 180,
        height: 220,
        alignItems: 'center',
        justifyContent: 'center'
      },
      categoryItemText: {
        color: 'white',
        width: 170,
        textAlign: 'center',
        fontSize: 20
      },
      bottomBar:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        width: '100%',
        height: 65,
        borderRadius: 100,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }
})