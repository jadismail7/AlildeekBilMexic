/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Application from './application';



export default class App extends Component {
  f1 = ()=>{
    console.warn("alildeek");
  }
  render() {
    return (
      <Application number={3} functionality={this.f1} flag={true}/>
    );
  }
}

