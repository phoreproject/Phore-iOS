import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

type Props = {};
export default class Splash extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.logoContainer}>
        <Image
         style={styles.logo}
         source={require('./src/assets/images/Phore_Blockchain_icon.png')} />
         </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 125,
    height: 125
  }
 
});
