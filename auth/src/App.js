import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount () {
    firebase.initializeApp ({
    apiKey: 'AIzaSyAsQIT9UJGxO2RssSUJ1r8JJJBBSsFcPVI',
    authDomain: 'auth-71123.firebaseapp.com',
    databaseURL: 'https://auth-71123.firebaseio.com',
    projectId: 'auth-71123',
    storageBucket: 'auth-71123.appspot.com',
    messagingSenderId: '384673546250'
  });
  }
  render () {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;
