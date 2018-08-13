import React, { Component } from "react";
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
  View
} from "native-base";
import { StatusBar } from 'react-native';
import styles from "./styles";
import QRCode from 'react-native-qrcode';
import constants from '../../components/constants';
import * as RealmDB from '../../realm/RealmSchemas';
import * as hdkey from '../../components/hdkey';


class ExportAccount extends Component {

  state = {
    xpub: ''
  }

  componentDidMount() {
    const xpub = RealmDB.getXpubFromFullWallet(0)
    this.setState({xpub: xpub})

  }
  render() {
    const key = this.state.xpub;
    return (
      <Container style={styles.container}>
        <Header>
        <StatusBar barStyle="light-content" />
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{ color: 'white' }}/>
            </Button>
          </Left>
          <Body>
            <Title style={{ color: 'white' }}>Export Account</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>

        <Content>
          <Text style={{ marginTop: 10, alignSelf: 'center'}}>Public key</Text>
          <Text style={{ marginTop: 10, alignSelf: 'center', marginLeft: 10, marginRight: 10}}>{key}</Text>
          <Text style={{ marginTop: 10, alignSelf: 'center', marginLeft: 10, marginRight: 10}}>Sharing your public key will allow anybody to view your balance and transaction history.</Text>
          <Text style={{ marginTop: 10, alignSelf: 'center'}}>Derivation path (BIP32)</Text>
          <Text style={{ marginTop: 10, alignSelf: 'center'}}>M/44H/444H/0H/0</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "center", marginTop: 25 }}
          >

          <QRCode
            value={key}
            size={200}
            bgColor='black'
            fgColor='white' />
         
         </View>

          
        </Content>
      </Container>
    );
  }
}

export default ExportAccount;
