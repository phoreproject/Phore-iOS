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
import styles from "./styles";
import QRCode from 'react-native-qrcode';

class ExportAccount extends Component {
  render() {
    const key = {
      xpubkey: "3fef17433a29302fdcb6df273c8a8cba89a52e16c2de3b0e172e9bfcbabe55b0fefe3138e6161ea9e7d34e3904eb972beab7c6041521e1e48ae8e5ca03979801"
    }
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Export Account</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>

        <Content>
          <Text>Public key</Text>
          <Text>{key.xpubkey}</Text>
          <Text>Sharing your public key will allow anybody to view your balance and transaction history.</Text>
          <Text>Derivation path (BIP32)</Text>
          <Text>M/44H/444H/0H/0</Text>
          <QRCode
            value={key.xpubkey}
            size={200}
            bgColor='black'
            fgColor='white' />

          
        </Content>
      </Container>
    );
  }
}

export default ExportAccount;
