'use strict';
import {
  Alert,
  Text,
  TouchableHighlight,
  ScrollView,
  ToastAndroid,
  View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, InputGroup, Input } from 'native-base';
import styles from './styles';
import React, {Component} from 'react';
import IconFA from 'react-native-vector-icons/FontAwesome';
 
import NewAddress from './newaddress';
import addressService from './addressService';
 
export default class addressDetail extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.route.obj);
  }
 
  edit(){
      this.props.navigator.push({
        component: NewAddress,
        callbackUpdateList: this.props.route.callbackUpdateList,
        editObj: this.props.route.obj
      });
    }
 
    delete(){
      Alert.alert(
          'Delete',
          'Do you want to delete this task?',
          [
            {text: 'Cancel', onPress: () => console.log('Action Canceled!')},
            {text: 'Yes', onPress: () => {
              addressService.delete(this.props.route.obj);
              this.props.route.callbackUpdateList();
              this.props.navigator.pop();
            }},
          ]
        )
    }
 
  back = () => {
    this.props.navigator.pop();
  }
 
  render() {
    let obj = this.props.route.obj;
    const content =  <view>
        <scrollview>
            <text style="{styles.textLabel}">
              Label
            </text>
            <text style="{styles.textProp}">
              {obj.label}
            </text>
            <text style="{styles.textLabel}">
              Address
            </text>
            <text style="{styles.textProp}">
              {obj.address}
            </text>
          </scrollview>
      </view>;
    // A simple UI with a toolbar, and content below it.
        return (
          <Container>
            <Header>
              <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
              <title>Address</title>
              <Button 
              transparent 
              onPress={this.edit()}>
                 <IconFA name="edit" />
              </Button>
              <Button transparent 
              onPress={this.delete()}>
                 <IconFA name="trash" />
              </Button>
            </Header>
              {content}
        </Container>)
  }
}