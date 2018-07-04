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
  CheckBox,
  ListItem
} from "native-base";
import styles from "./styles2";
import { StatusBar } from 'react-native';

class WatchOnly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox1: false
    };
  }
  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1
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
            <Title style={{ color: 'white'}}>Watch Only</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>

        <Content>
          
          <Text style={{alignSelf: 'center', marginTop: 10, marginLeft: 10, marginRight: 10}}>Make your wallet a Watch Only Wallet importing your xpub from another wallet.</Text>
          <Text style={{alignSelf: 'center', marginTop: 10, marginLeft: 10, marginRight: 10}}>People using this device are going to see the full balance but not be able to spend the coins.</Text>

          <Form>
          <Item>
              <Input placeholder="Paste your xpub here" />
            </Item>

            <ListItem button onPress={() => this.toggleSwitch1()}>
            <CheckBox
              color="#000"
              checked={this.state.checkbox1}
              onPress={() => this.toggleSwitch1()}
            />
            <Body>
              <Text>BIP32 Wallet</Text>
            </Body>
          </ListItem>

          <Button bordered dark block style={{ margin: 15, marginTop: 50 }}
           onPress={() => this.props.navigation.navigate("RestoreMnemonic")}>
            <Text>Import</Text>
          </Button>
          </Form>

           
          
        </Content>
      </Container>
    );
  }
}

export default WatchOnly;
