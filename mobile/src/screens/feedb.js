import React from 'react';
import { Text,View,Image,StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import { TextInput, } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class feedb extends React.Component{
    render(){
        const {navigate} = this.props.navigation
        return(
            <ScrollView>
            
            <Text  style={{fontSize:25,alignSelf:"center",marginTop:100,
             fontWeight: 'bold',
            // color: '#333',
          }}>Спасибо за заказ!</Text>
          <Text style={{
              fontSize:17,
              marginTop:20,
              width: 280,
              height: 100,
              alignSelf:'center'}}>Ваш заказ #1345 будет доставлен по адресу ул.Кабанбай батыра, 23
 в течении 30мин</Text>
              <View style={{
                justifyContent:'center',
                alignItems:'center',
                marginTop:10,
                marginEnd:30,
                backgroundColor:"#00716F",
                paddingVertical:4,
                marginEnd:100,
                marginStart:100
            }}>
            <Text style={{ color:"white",
             fontWeight: 'bold',
             alignSelf:'center',
             marginTop:7
             }}
             onPress={() =>this.props.navigation.navigate('')}>  Проверить заказ</Text></View>
             <Text 
            onPress={() =>this.props.navigation.navigate('main')}
            style={{
                alignSelf:"center",
                color:"#00716F",
                paddingVertical:30,
            }}>Вернуться в меню</Text>
            </ScrollView>

        );
    };
    }
    