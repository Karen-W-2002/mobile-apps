import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import {useState, useRef} from 'react'

import { Image } from 'react-native';
import { BLUE, LIGHT_BLUE } from './CONSTANTS';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={[{ width: 150, height: 150}]} />

      <View style={styles.inputView}>
        <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#fff"
            onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => {
          navigation.navigate('Home')
        }}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate('Register');
      }}>
        <Text style={styles.signup_button}>Sign Up</Text> 
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    paddingTop: 125,
  },
  inputView: {
    backgroundColor: LIGHT_BLUE,
    borderRadius: 30,
    width: "75%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    color: "#fff",
    placeholderTextColor: "white",
    height: 50,
    flex: 1,
    padding: 10,
    width: "75%",
    textAlign: "center"
  },
  signup_button: {
    height: 30,
    marginTop: 40,
    marginBottom: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 0,
  },
  text: {
    color: "white"
  },
  loginBtn: { 
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: BLUE,
  }

});
