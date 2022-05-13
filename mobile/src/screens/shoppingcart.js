import React from 'react';
import { Text,View,Image,StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import { TextInput, } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class shoppingcart extends React.Component{
    render(){
        const {navigate} = this.props.navigation
        return(
            <ScrollView style={styles.container}>
            <View style={styles.cardsWrapper}>
              <Text
              style={{
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#333',
            marginTop:20
          }}>Заказ</Text>
          <View style={styles.card}>
                  <View style={styles.cardImgWrapper}>
                <Image 
                source={require('../images/pp3.jpg')}
                resizeMode="cover"
                style={styles.cardImg}/>
                  </View>
                  <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Ресторан 4</Text>
                      <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text><Text
            style={{
                marginTop:2,
            }}>2300 тг</Text>
                  </View>
              </View>
              <View style={styles.card}>
                  <View style={styles.cardImgWrapper}>
                <Image 
                source={require('../images/pp2.jpg')}
                resizeMode="cover"
                style={styles.cardImg}/>
                  </View>
                  <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Ресторан 5</Text>
                      <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text><Text
            style={{
                marginTop:2,
            }}>2300 тг</Text>
                  </View>
              </View>
              <View style={styles.card}>
                  <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Ваш заказ</Text>
                      <Text style={styles.cardDetail}>Еда 4</Text>
                      <Text style={{
                        fontSize:13
                      }}>-------------------</Text>
                      <Text style={{
                marginTop:2,
            }}>4600 тг</Text>
                  </View>
              </View>
              <View>
              <Text  style={{fontSize:18,marginTop:24,
             fontWeight: 'bold',
          }}>Введите данные</Text>
            <Text>Ваше имя</Text>
            <View style={styles.inputcom}>
                <TextInput style={{paddingHorizontal:10}}></TextInput>
            </View>
            <Text>Адрес</Text>
            <View style={styles.inputcom}>
                <TextInput style={{paddingHorizontal:10}}></TextInput>
            </View>
            <Text style={{marginTop:7}}>Номер телефона</Text>
            <View style={styles.inputcom}>
                <TextInput style={{paddingHorizontal:10}}></TextInput>
            </View>
            <View style={{
                justifyContent:'flex-start',
                alignItems:'flex-start',
                marginTop:23,
                backgroundColor:"#00716F",
                paddingVertical:1,
                marginEnd:200
            }}>
                <Text style={{ color:"white",
             fontWeight: 'bold',
            alignSelf:'center',
            marginTop:7
          }}
                onPress={() =>this.props.navigation.navigate('feedb')}
                >  Готово</Text>
            </View>
                </View>
          </View>
            </ScrollView>

        );
    };
    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputcom:{
      marginTop:15,
      borderWidth:2,
      marginTop:7,
      borderColor:"#00716F",
      paddingVertical:2,
    },
    sliderContainer:{
        height: 200,
        width:'90%',
        marginTop: 10,
        justifyContent:'center',
        alignSelf:'center',
        borderRadius: 8,
    },
    wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#00716F',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 120,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
  cardDetail: {
    marginEnd:5,
    fontSize: 12,
    color: '#444',
  },
    })