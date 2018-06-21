import React, { Component } from "react";
import {
  Linking
} from 'react-native';
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
  List,
  ListItem
} from "native-base";
import styles from "./styles";
import QRCodeScanner from 'react-native-qrcode-scanner';

class Scan extends Component {
  render() {
    onSuccess(e) {
      Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
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
            <Title>Scan QR Code</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>

        <Content>
         <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        topContent={
          <Text>
            Scan the QR Code
          </Text>
        }
        bottomContent={
          <Button bordered dark block style={{ margin: 15, marginTop: 50 }}
           onPress={() => this.props.navigation.navigate("Send")}>
            <Text>Got it</Text>
          </Button>
        }
      />

          
        </Content>
      </Container>
    );
  }
}

export default Scan;
