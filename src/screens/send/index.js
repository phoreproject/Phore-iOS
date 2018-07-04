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
import { StatusBar, View } from 'react-native';
import styles from "./styles";

class Send extends Component {
  render() {
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
              <Input />
            </Item>
            
            <Text style={{alignSelf: 'center'}}>0 USD</Text>
            <Button transparent style={{alignSelf: 'flex-end', marginTop: -10}} onPress={() => this.props.navigation.goBack()}>
              <Icon name="swap" style={{color: 'black'}}/>
            </Button>
            
            <Button transparent block dark style={styles.mb15}>
            <Text style={{fontWeight: 'bold'}}>ADD ALL</Text>
          </Button>
          <Button transparent style={{alignSelf: 'flex-end', marginBottom: -70}} onPress={() => this.props.navigation.goBack()}>
              <Icon name="qr-scanner" style={{color: 'black'}}/>
            </Button>
           <Text style={{alignSelf: 'center', marginTop: 30}}>Address</Text>
           <Item>
              <Input placeholder="Write address or label name" />
            </Item>
            <Text style={{alignSelf: 'center', marginTop: 10}}>Description</Text>
            <Item>
              <Input placeholder="Add a description" />
            </Item>
           <Button bordered dark block style={{ margin: 15, marginTop: 50 }}>
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
