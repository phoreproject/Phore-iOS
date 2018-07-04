import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  Card
} from "native-base";
import { StatusBar } from 'react-native';
import styles from "./styles";
import QRCode from 'react-native-qrcode';
import constants from '../../components/constants';
import * as RealmDB from '../../realm/RealmSchemas';

class Receive extends Component {

  state = {
    pkeystring: ''
  }

  componentWillMount() {
    const recaddress = RealmDB.getReceivingAddress(0)
    console.log(recaddress)
    this.setState({ pkeystring: recaddress })
    

  }

  _setContent() {
    Clipboard.setString(pkeystring)
  }
  render() {

    const data = {
      pkeystring: this.state.pkeystring,
    };
    return (
      <Container style={styles.container}>
        <Header>
        <StatusBar barStyle="light-content" />
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{ color: 'white'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{ color: 'white'}}>My Address</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="more" style={{ color: 'white'}}/>
            </Button>
          </Right>
        </Header>

        <Content>

       <View
            style={{ flexDirection: "row", justifyContent: "center", marginTop: 25 }}
          >

          <QRCode
            value={data.pkeystring}
            size={200}
            bgColor='black'
            fgColor='white' />
         
         </View>
          
          <Text style={{alignSelf: 'center', marginTop: 8}}>{data.pkeystring}</Text>




          <View
            style={{ flexDirection: "row", justifyContent: "center", marginTop: 25 }}
          >
            <Button bordered success style={styles.mb15}
            onPress={() => alert('this will be the pkeystring state added to clipboard')}>
            <Text>Save</Text>
          </Button>
            <Button bordered success style={styles.mb15}
            onPress={() => alert('this will be where it copies to clipboard and passes to another app using react native app link, which app could be set in preferences')}>
            <Text>Share</Text>
          </Button>
          </View>

         


          
        </Content>
      </Container>
    );
  }
}

export default Receive;
