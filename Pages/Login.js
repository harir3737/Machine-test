import { View, Text,TouchableHighlight,StyleSheet,
Image,TextInput } from 'react-native';
import React, { useState } from 'react';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const Login = ({navigation}) => {
    const[user,SetUser]=useState('admin')
    const[pswd,SetPswd]=useState('1234')
    const[evalue,SetEvalue]=useState('')
    const[epass,SetEpass]=useState('')
    const[enable,SetEnable]=useState(false)
    console.log("username",evalue)
    console.log("password",epass)
const checkuser=()=>{
  if(evalue==user){
    if(epass==pswd){
    SetEnable(false)
  }
  }
  else{
    SetEnable(true)
  }
}

  
  return (
    <KeyboardAvoidingView>
    <View style={styles.vew}>
        <Image source={require('../assets/logo1.jpg')} style={styles.logo}/>
      <Text style={{fontSize:28,fontWeight:"400",marginRight:"32%",
    marginBottom:"3%",color:"black"}}>Welcome Back,</Text>
      <Text style={{fontSize:16,fontWeight:"bold",marginRight:"46%",
    marginBottom:"20%"}}>Sign into continue</Text>
      <Text style={styles.email} >Email</Text>
      <TextInput style={styles.txtip} onChangeText={(val)=>SetEvalue(val)} />
      <Text style={styles.password}>Password</Text>
      <TextInput style={styles.txtip2}onChangeText={(val)=>SetEpass(val)}/>
      <TouchableHighlight style={styles.touch} onPress={()=>navigation.navigate('home')} disabled={enable}>
          <Text style={{color:"white",fontWeight:"bold"}}>Login</Text>
      </TouchableHighlight>
    </View>
    </KeyboardAvoidingView>
  );
};
const styles=StyleSheet.create({
    vew:{
        height:"100%",
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    },
    touch:{
        width:"80%",
        height:"7%",
        backgroundColor:"#5f3ca3",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:"20%",
    },
    logo:{
        height:"15%",
        width:"15%",
        marginRight:"70%",
        marginTop:"15%"
    },
    txtip:{
        width:"80%",
        borderBottomColor:"#abb0b8",
        borderBottomWidth:.9,
        marginBottom:"15%"

    },
    txtip2:{
        width:"80%",
        borderBottomColor:"#abb0b8",
        borderBottomWidth:.9,
        marginBottom:"10%"
    },
    email:{
        marginRight:"70%",
        fontWeight:"bold",
    },
    password:{
        marginRight:"64%",
        fontWeight:"bold"

    }

})

export default Login;
