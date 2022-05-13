import React from 'react';
import { Text,View,Image,StyleSheet, TouchableOpacity,ScrollView,useState, useCallback,BackHandler } from 'react-native';
import { TextInput, } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default class main extends React.Component{ 
    render(){
        const {navigate} = this.props.navigation;
        return(
            <ScrollView style={styles.container}>
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity 
            style={{
              width:50,
              justifyContent:'center',

            }}>
              <Image 
                // source={icons.list}
                resizeMode="contain"
                style={{
                  width:30,
                  height:30,
                }}
              />
            </TouchableOpacity>
            </View>
            <View style={styles.sliderContainer}>
            <Swiper autoplay
          horizontal={false} height={200} activeDotColor="#00716F">
                <View style={styles.slide}>
                    <Image source={require('../images/pp_uzhin.jpg')}
                    resizeMode="cover"
                        style={styles.sliderImage}
                    />
                </View>
                <View style={styles.slide}>
                    <Image source={require('../images/pp2.jpg')}
                    resizeMode="cover"
                    style={styles.sliderImage}
                    />
                    
                </View>
                <View style={styles.slide}>
                    <Image source={require('../images/pp3.jpg')}
                    resizeMode="cover"
                    style={styles.sliderImage}
                    />
                    
                </View>
            </Swiper>
            </View>
            
            <View style={styles.categoryContainer}>
            <TouchableOpacity style={styles.categoryBtn} onPress={() =>this.props.navigation.navigate('restaurants')}>
                <View style={styles.categoryIcon}>
                 <Ionicons name='ios-restaurant' size={35} color="#00716F"></Ionicons>
                </View>
                <Text style={styles.categoryBtnTxt}
                 >Рестораны</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() =>this.props.navigation.navigate('login')}>
                <View style={styles.categoryIcon}>
                 <MaterialCommunityIcons name='food-fork-drink' size={35} color="#00716F"></MaterialCommunityIcons>
                </View>
                <Text style={styles.categoryBtnTxt}>Авторизация</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() =>this.props.navigation.navigate('shoppingcart')}>
                <View style={styles.categoryIcon}>
                 <MaterialCommunityIcons name='food' size={35} color="#00716F"></MaterialCommunityIcons>
                </View>
                <Text style={styles.categoryBtnTxt}>Корзина</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsWrapper}>
              <Text
              style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>Меню</Text>
              <View style={styles.card}>
                  <View style={styles.cardImgWrapper}>
                <Image 
                source={require('../images/pp_uzhin.jpg')}
                resizeMode="cover"
                style={styles.cardImg}/>
                  </View>
                  <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Боул Микс</Text>
                      <Text style={styles.cardDetails}>
                      В составе: фасоль, морковь, помидоры, листья салата, азиатские арбузы и капуста
            </Text><Text
            style={{
                marginTop:2,
            }}>2300 тг</Text><Text 
            onPress={() =>this.props.navigation.navigate('')}
            style={{
                marginTop:2,
                color:"#00716F",
            }}>Купить</Text>
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
                      <Text style={styles.cardTitle}>Боул Микс</Text>
                      <Text style={styles.cardDetails}>
                      В составе: фасоль, морковь, помидоры, листья салата, азиатские арбузы и капуста
            </Text><Text
            style={{
                marginTop:2,
            }}>2300 тг</Text><Text 
            onPress={() =>this.props.navigation.navigate('')}
            style={{
                marginTop:2,
                color:"#00716F",
            }}>Купить</Text>
                  </View>
              </View>
              <View style={styles.card}>
                  <View style={styles.cardImgWrapper}>
                <Image 
                source={require('../images/pp3.jpg')}
                resizeMode="cover"
                style={styles.cardImg}/>
                  </View>
                  <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Боул Микс</Text>
                      <Text style={styles.cardDetails}>
                      В составе: фасоль, морковь, помидоры, листья салата, азиатские арбузы и капуста
            </Text><Text
            style={{
                marginTop:2,
            }}>2300 тг</Text><Text 
            onPress={() =>this.props.navigation.navigate('')}
            style={{
                marginTop:2,
                color:"#00716F",
            }}>Купить</Text>
                  </View>
              </View><View style={styles.card}>
                  <View style={styles.cardImgWrapper}>
                <Image 
                source={require('../images/pp_uzhin.jpg')}
                resizeMode="cover"
                style={styles.cardImg}/>
                  </View>
                  <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Боул Микс</Text>
                      <Text style={styles.cardDetails}>
                      В составе: фасоль, морковь, помидоры, листья салата, азиатские арбузы и капуста
            </Text><Text
            style={{
                marginTop:2,
            }}>2300 тг</Text><Text 
            onPress={() =>this.props.navigation.navigate('')}
            style={{
                marginTop:2,
                color:"#00716F",
            }}>Купить</Text>
                  </View>
              </View><View style={styles.card}>
                  <View style={styles.cardImgWrapper}>
                <Image 
                source={require('../images/pp2.jpg')}
                resizeMode="cover"
                style={styles.cardImg}/>
                  </View>
                  <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Боул Микс</Text>
                      <Text style={styles.cardDetails}>
                      В составе: фасоль, морковь, помидоры, листья салата, азиатские арбузы и капуста
            </Text><Text
            style={{
                marginTop:2,
            }}>2300 тг</Text><Text 
            onPress={() =>this.props.navigation.navigate('')}
            style={{
                marginTop:2,
                color:"#00716F",
            }}>Купить</Text>
                  </View>
              </View><View style={styles.card}>
                  <View style={styles.cardImgWrapper}>
                <Image 
                source={require('../images/pp3.jpg')}
                resizeMode="cover"
                style={styles.cardImg}/>
                  </View>
                  <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>Боул Микс</Text>
                      <Text style={styles.cardDetails}>
                      В составе: фасоль, морковь, помидоры, листья салата, азиатские арбузы и капуста
            </Text>
            <Text
            style={{
                marginTop:2,
            }}>2300 тг</Text><Text 
            onPress={() =>this.props.navigation.navigate('')}
            style={{
                marginTop:2,
                color:"#00716F",
            }}>Купить</Text>
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
    height: 130,
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
    })