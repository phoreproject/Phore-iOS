/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {DrawerNavigator, DrawerItems } from 'react-navigation';

import HomeScreen from './screens/home/home';
import SettingsScreen from './screens/settings/settingslist';

import {Container, Content, Header, Body, Icon } from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // <View style={styles.container}>
        
      //   <View style={styles.logoContainer}>
      //   <Image
      //    style={styles.logo}
      //    source={require('./src/assets/images/Phore_Blockchain_icon.png')} />
      //    </View>
        
      // </View>
      <MyApp />
    );
  }
}

const CustomDrawerContentComponent = (props) =>(

  <Container>
    <Header style={{ height: 200, backgroundColor: '#232c38' }}>
      <Body>
        <Image
        style={styles.drawerImage}
        source={require('./src/assets/images/phore_logo-rebrand_full-darkbg.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>

)

const MyApp = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Send: {
    screen: SendScreen
  },
  Receive: {
    screen: ReceiveScreen
  }
  Settings: {
    screen: SettingsScreen
  },
  AddressBook: {
    screen: AddressBookScreen
  }, {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }

})

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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  drawerImage: {
    height: 25,
    widght: 75
  }
});
