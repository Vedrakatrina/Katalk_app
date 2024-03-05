// LandingPage.js

import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LandingPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        {/* <Text style={styles.title}> My Mobile App</Text> */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('HomePage')}
        >
          <Text style={styles.loginButtonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff', // Background color of safe area
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: -150,
    marginTop: -150,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: '#1877f2',
    borderRadius: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#1877f2', //  blue color
    borderRadius: 8,
    padding: 15,
    width: '100%',
    marginBottom: 12,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#42b72a', //  green color
    borderRadius: 8,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LandingPage;

