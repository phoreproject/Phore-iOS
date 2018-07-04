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

class RestoreWallet extends Component {
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
            <Title style={{ color: 'white'}}>Restore wallet</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="more" style={{ color: 'white'}}/>
            </Button>
          </Right>
        </Header>

        <Content>

         <Text style={{alignSelf: 'center'}}>Select one of your backups</Text>
         <Text style={{alignSelf: 'center'}}>files loaded from</Text>
         <Button bordered dark block style={{ margin: 15, marginTop: 50 }}
           onPress={() => this.props.navigation.navigate()}>
            <Text>iCloud</Text>
          </Button>
          <Form>
            
            
           <Item>
              <Input placeholder="0.9.3_phore-wallet-backup_mainnet-2018-06-21" />
            </Item>
            
            <Item>
              <Input placeholder="Password" />
            </Item>
           <Button bordered dark block style={{ margin: 15, marginTop: 50 }}
           onPress={() => this.props.navigation.navigate("RestoreMnemonic")}>
            <Text>Restore Wallet</Text>
          </Button>
          </Form>
          

          
        </Content>
      </Container>
    );
  }
}

export default RestoreWallet;
