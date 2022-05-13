import React from 'react';
import { Text,View,Image } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';

export default class Login extends React.Component{

    render(){
        return(
            <View style={{backgroundColor:"#FFF", height:"100%",}}>
            <Image source={require('../images/image.jpg')}
                             style={{width:"100%",height:"14%"}}

            />
            <Text  style={{fontSize:28,alignSelf:"center",marginTop:20,
             fontWeight: 'bold',
            // color: '#333',
          }}>Авторизация</Text>
            <View 
            style={{
                flexDirection:"row",
                alignItem:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:30,
                paddingHorizontal:10,
                borderColor:"#00716F",
                borderRadius:23,
                paddingVertical:2,
            }}>
                <Icon name='mail' color="#00716F" size={24}></Icon>
                <TextInput style={{paddingHorizontal:10}}></TextInput>
            </View>
            <View 
            style={{
                flexDirection:"row",
                alignItem:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:15,
                paddingHorizontal:10,
                borderColor:"#00716F",
                borderRadius:23,
                paddingVertical:2,
            }}>
                <Icon name='' color="#00716F" size={24}></Icon>
                <TextInput style={{paddingHorizontal:10,}}></TextInput>
            </View>
            <View style={{
                marginHorizontal:55,
                alignItems:"center",
                justifyContent:"center",
                marginTop:30,
                backgroundColor:"#00716F",
                paddingVertical:10,
                borderRadius:23,
            }}>
                <Text style={{ color:"white",
             fontWeight: 'bold'}}
                onPress={() =>this.props.navigation.navigate('main')}
                >Авторизация</Text>
            </View>
            <Text 
            onPress={() =>this.props.navigation.navigate('register')}
            style={{
                alignSelf:"center",
                color:"#00716F",
                paddingVertical:30,
            }}>Регистрация</Text>
        
            </View>
            
        )
    }
}