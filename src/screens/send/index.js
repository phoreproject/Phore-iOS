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
  Text
} from "native-base";
import { StatusBar, View, Modal } from 'react-native';
import styles from "./styles";
import * as phore from '../../wallet';
import * as phorerpc from '../../components/phorerpc';
import QRCodeScanner from 'react-native-qrcode-scanner';
import * as phorerate from '../../components/phorerate';
import * as RealmDB from '../../realm/RealmSchemas';

class Send extends Component {
  state = {
    phrbalance: '3',
    preferredfiat: 'USD',
    phoretofiatrate: '1.33',
    sendingcurrency: 'PHR',
    sendingaddress: 'Write address or label name',
    sendingdescription: '',
    sendingamount: '',
    inputtxid: 'ced189f026de1932db96d69af3fc8a7cb04a5f3b41dde312fb609d014580856c',
    inputoutn: 1,
    signingWIF: 'Kxthj3A9VDrqYPpUWQ93sdaAAXDhZSmEEvSvddJxgzEKtcVS4RyM',
    keypairSpend: '',
    modalVisible: false

  }

  componentWillMount() {
    const prefcur = RealmDB.getPreferredCurrency()
    this.setState({preferredfiat: prefcur})
    phorerate.getPhoreRate(prefcur).then(response => this.setState({phoretofiatrate: response}))
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  }

  
  render() {
    const balance = this.state.phrbalance;
    const fiatamount = (this.state.sendingamount * this.state.phoretofiatrate).toFixed(2);
    const sendingamount = this.state.sendingamount * 100000000;
    const sendingamountbase = this.state.sendingamount;
    const sendingaddress = this.state.sendingaddress;
    const WIF = this.state.signingWIF;
    const outn = this.state.inputoutn;
    const inputtxid = this.state.inputtxid;
    console.log(WIF)
    return (
      <Container style={styles.container}> 
        <Header>
        <StatusBar barStyle="light-content" />
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{color: 'white'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'white'}}>Send</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("Receive")}>
              <Icon name="more" style={{color: 'white'}}/>
            </Button>
          </Right>
        </Header>

        <Content>
                 <Form>
            <Text style={{alignSelf: 'center', marginTop: 10}}>Amount</Text>
            
            <Item floatingLabel>
              <Label style={{alignSelf: 'center'}}>PHR</Label>
              <Input placeholder={sendingamountbase} onChangeText={(text) => {this.setState({sendingamount: text})}}/>
            </Item>
            
            <Text style={{alignSelf: 'center'}}>{fiatamount} {this.state.preferredfiat}</Text>
            <Button transparent style={{alignSelf: 'flex-end', marginTop: -10}} onPress={() => this.props.navigation.goBack()}>
              <Icon name="swap" style={{color: 'black'}}/>
            </Button>
            
            <Button transparent block dark style={styles.mb15} onPress={() => this.setState({sendingamount: balance})}>
            <Text style={{fontWeight: 'bold'}}>ADD ALL</Text>
          </Button>
          <Button transparent style={{alignSelf: 'flex-end', marginBottom: -70}} onPress={() => this.setModalVisible(true)}>
              <Icon name="qr-scanner" style={{color: 'black'}}/>
            </Button>
           <Text style={{alignSelf: 'center', marginTop: 30}}>Address</Text>
           <Item>
              <Input placeholder={sendingaddress} onChangeText={(text) => {this.setState({sendingaddress: text})}}/>
            </Item>
            <Text style={{alignSelf: 'center', marginTop: 10}}>Description</Text>
            <Item>
              <Input placeholder="Add a description" onChangeText={(text) => {this.setState({sendingdescription: text})}}/>
            </Item>
           <Button bordered dark block style={{ margin: 15, marginTop: 50 }} onPress={() => {
             const sendingamount = this.state.sendingamount * 100000000;
    const sendingamountbase = this.state.sendingamount;
    const sendingaddress = this.state.sendingaddress;
    const WIF = this.state.signingWIF;
    const outn = this.state.inputoutn;
    const inputtxid = this.state.inputtxid;

            console.log(sendingamount + ' ' + sendingaddress + ' ' + ' ' + inputtxid + ' ' + outn + ' ' + WIF)
            let txHex = phore.generateTransaction(sendingaddress, sendingamount, inputtxid, outn, WIF)
            console.log(txHex)
           
              
            alert('Your transaction hex is: ' + txHex)
             }}>
            <Text>Send</Text>
          </Button>
          </Form>
          <Text style={{alignSelf: 'center'}}>Fee is not included in the total amount</Text>

          
        </Content>
      </Container>
    );
  }
}

export default Send;
