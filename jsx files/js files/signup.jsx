import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

function SignUpScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.overlapGroupContainer}>
        <View style={styles.overlapGroupItem}>
          <Image style={styles.ellipse} source={require('./image/Ellipse 1.png')} />
          <Image style={styles.logo} source={require('./image/logo.png')} />
          <Text style={styles.title}>SIGNUP</Text>
        </View>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Email Address" />
        <TextInput style={styles.input} placeholder="Whatsapp Account" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
        <View style={styles.btn}>
          <TouchableOpacity>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.redirection}>
          <Text style={styles.redirectionText}>Already a Member?</Text>
          <TouchableOpacity>
            <Text style={styles.redirectionLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderColor: 'none',
      display: 'flex',
      flexDirection: 'column',
      height: 926,
      width: 428,
    },
    overlapGroupContainer: {
      alignItems: 'center',
      backgroundImage: require('./ellipse2.png'),
      backgroundSize: '100% 100%',
      display: 'flex',
      flexDirection: 'column',
      objectFit: 'cover',
      height: '60%',
      width: 428,
      marginBottom: -120,
    },
    overlapGroupItem: {
      height: 249,
      marginLeft: 1,
      marginTop: 126,
      position: 'relative',
      width: 225,
    },
    ellipse: {
      height: 189,
      left: 20,
      position: 'absolute',
      top: 0,
      width: 184,
    },
    logo: {
      height: 105,
      left: 41,
      objectFit: 'cover',
      position: 'absolute',
      top: 41,
      width: 150,
    },
    title: {
      color: '#000000',
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: 50,
      left: 0,
      letterSpacing: 0,
      lineHeight: 'normal',
      position: 'absolute',
      textAlign: 'center',
      top: 188,
      width: 225,
    },
    form: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: 47,
      marginTop: 50,
      minWidth: 388,
      gap: 10,
      textDecoration: 'none',
    },
    input: {
      width: '90%',
      padding: 12,
      backgroundColor: '#D9D9D9',
      color: '#FFFFFF',
      borderColor: 'transparent',
      borderRadius: 5,
      fontFamily: 'Inter',
      fontWeight: '200',
      fontSize: 16,
    },
    btn: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: 47,
      minWidth: 388,
      marginTop: 20,
      textDecoration: 'none',
    },
    btnText: {
      width: '40%',
      padding: 12,
      borderColor: 'transparent',
      borderRadius: 10,
      backgroundColor: '#FF7A00',
      color: '#FFFFFF',
      fontWeight: '200',
      fontSize: 16
    },
    redirection: {
      marginTop: 10,
      textAlign: 'center',
    },
    redirectionText: {
      marginRight: 5,
      fontFamily: 'Inter',
      color: '#000000',
    },
    redirectionLink: {
      color: '#FF7A00',
      textDecoration: 'none',
      fontFamily: 'Inter',
    },
  });
  
  export default SignUpScreen;