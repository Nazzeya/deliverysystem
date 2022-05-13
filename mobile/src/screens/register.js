import React from 'react';
import { Text,View,Image } from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';

export default class register extends React.Component{
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF", height:"100%"}}>

            <Image source={require('../images/image.jpg')}

            style={{width:"100%",height:"12%"}}

            />
            
            <Text  style={{fontSize:28,alignSelf:"center",marginTop:50}}>Регистрация</Text>
            <View 
            style={{
                flexDirection:"row",
                alignItem:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:50,
                paddingHorizontal:10,
                borderColor:"#00716F",
                borderRadius:23,
                paddingVertical:2,
            }}>
                <TextInput
                placeholder='email'
                placeholderTextColor={"#00716F"}
                 style={{paddingHorizontal:10}}></TextInput>
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
                <TextInput
                secureTextEntry
                placeholder='password'
                placeholderTextColor={"#00716F"}
                 style={{paddingHorizontal:10}}></TextInput>
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
                <TextInput
                secureTextEntry
                placeholder='confirm password'
                placeholderTextColor={"#00716F"}
                 style={{paddingHorizontal:10}}></TextInput>
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
                <TextInput
                placeholder='phone number'
                placeholderTextColor={"#00716F"}
                 style={{paddingHorizontal:10}}></TextInput>
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
                <Text
                onPress={()=>navigate('login')}>Зарегистрироваться</Text>
            </View>
              
            </View>
            
        )
    }
}