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
  Textarea,
  Text
} from "native-base";
import { StatusBar } from 'react-native';
import styles from "./styles";
import * as bip39 from '../../components/bip39';
import * as phore from '../../wallet';
import * as RealmDB from '../../realm/RealmSchemas';
import * as hdkey from '../../components/hdkey';
import * as uuid from "react-native-uuid";

class RestoreMnemonic extends Component {

  state = {
      inputcode: '',
      seed: '',
      hdmaster: '',
      keypair: '',
      WIF: '',
      pubkey: '',
      address: '',
      xpub: '',
      xprv: ''
      
    }


  importWallet = () => {
      RealmDB.realm.write(() => {
        var wid = uuid.v1()
        var seed = bip39.generateSeed(this.state.inputcode)
        var hdmaster = phore.generateHDMaster(seed)
        var keypair = phore.generateKeyPairFromMaster(hdmaster, 1)
        var WIF = phore.getWIFfromKeyPair(keypair)
        var recaddress = phore.getAddressFromKeyPair(keypair)
        var hdk = hdkey.rnHDKey(seed)
        var xpub = hdk.publicExtendedKey
        var xprv = hdk.privateExtendedKey
        RealmDB.realm.create('FullWallet', {
          wid: wid,
          seed: seed,
          WIF: WIF,
          recaddress: recaddress,
          xpub: xpub,
          xprv: xprv
        })
      })
    }

  render() {
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
            <Title style={{ color: 'white'}}>Restore Mnemonic</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>

        <Content>
          
          <Text style={{alignSelf: 'center'}}>To restore your wallet you must enter the 24 words of your mnemonic code in the right order</Text>
          <Form>
        <Textarea rowSpan={10} bordered placeholder="Input words with space in between each"

        Input 
              onChangeText={ (inputcode) => this.setState({inputcode})}
              value={this.state.inputcode} />

        


          <Button bordered dark block style={{ margin: 15, marginTop: 15 }}
           onPress={() => {

            console.log('inputcode is: ' + this.state.inputcode)
            
            this.importWallet()

          }
            
          }>
            <Text>Confirm</Text>
          </Button>

          </Form>
          
        </Content>
      </Container>
    );
  }
}

export default RestoreMnemonic;
