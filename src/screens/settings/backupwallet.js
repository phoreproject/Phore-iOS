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
import { StatusBar } from 'react-native';

class BackupWallet extends Component {
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
            <Title style={{ color: 'white'}}>Backup wallet</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>

        <Content>
          <Form>
            <Text style={{alignSelf: 'center', marginTop: 40, marginLeft: 10, marginRight: 10}}>Your backup will be encrypted 
            with the password you choose and saved to iCloud.</Text>
            <Item regular style={{alignSelf: 'center', marginTop: 20, marginLeft: 10, marginRight: 10}}>
              
              <Input placeholder='Password' />
            </Item>
            <Item regular style={{alignSelf: 'center', marginLeft: 10, marginRight: 10}}>
              
              <Input placeholder='Repeat Password' />
            </Item>
          
           <Button bordered dark block style={{ margin: 15, marginTop: 50 }}>
            <Text>Backup wallet</Text>
          </Button>
          </Form>
          

          
        </Content>
      </Container>
    );
  }
}

export default BackupWallet;
