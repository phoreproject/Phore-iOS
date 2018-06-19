import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Icon, Button, Container, Header, Content, Left } from 'native-base'

type Props = {};
export default class HomeScreen extends Component<Props> {

	static navigationOptions = {
		drawerIcon:(
			<Image source ={require('../../src/assets/images/Phore_Blockchain_icon.png')}
			style={{height:24,width:24}/>
			),
		headerRight: <Icon style={{ paddingRight: 10 }} name='ios-send-outline' />
	}
  render() {
    return (
      <Container>
      	<Header style={{ backgroundColor: '#00d188' }}>
      		<Left>

      			<Icon name="ios-menu" onPress={
      				()=>this.props.navigation.navigate('DrawerOpen')} />


      		</Left>

      	</Header>
      	<Content contentContainerStyle={{
      		flex: 1,
      		alignItems: 'center',
      		justifyContent: 'center'
      	}}>

      		<Text>Home Screen</Text>

      	</Content>
      </Container>
    );
  }
}

