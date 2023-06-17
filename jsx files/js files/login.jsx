import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.overlapGroupContainer}>
        <View style={styles.overlapGroupItem}>
          <Image style={styles.ellipse} source={require('./assets/Ellipse 1.png')} />
          <Image style={styles.logo} source={require('./assets/logo.png')} />
          <Text style={styles.title}>LOG IN</Text>
        </View>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Email Address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <View style={styles.redirection}>
          <Text>Not a Member?</Text>
          <TouchableOpacity>
            <Text style={styles.redirectionLink}>Signup</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.place}>
          <Text>or</Text>
        </View>
        <TouchableOpacity>
          <Image style={styles.googleIcon} source={require('./assets/google-icon.svg')} />
        </TouchableOpacity>
        <Text style={styles.loginWithGoogle}>Login with Google</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    height: 926,
    width: 428,
    fontFamily: 'Inter',
  },
  overlapGroupContainer: {
    alignItems: 'center',
    backgroundImage: require('./assets/ellipse2.png'),
    backgroundSize: '100% 100%',
    flexDirection: 'column',
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
    fontSize: 50,
    fontWeight: '500',
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
    flexDirection: 'column',
    height: 470,
    marginTop: 100,
    minWidth: 388,
    gap: 10,
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
  forgotPassword: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 13,
  },
  forgotPasswordText: {
    fontFamily: 'Inter',
    fontWeight: '200',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 47,
    minWidth: 388,
    marginTop: 20,
    backgroundColor: '#FF7A00',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontWeight: '200',
    fontSize: 16,
  },
  redirection: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  redirectionLink: {
    color: '#FF7A00',
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 5,
    textDecorationLine: 'underline',
  },
  place: {
    color: '#000000',
    marginTop: 20,
  },
  googleIcon: {
    height: 36,
    width: 37,
  },
 loginWithGoogle: {
    marginTop: 10,
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
  },
});