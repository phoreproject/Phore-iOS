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

class RestoreWallet extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Restore wallet</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>

        <Content>
          <Form>
            <Text style={{alignSelf: 'center'}}>Amount</Text>
            <Item floatingLabel>
              <Label style={{alignSelf: 'center'}}>PHR</Label>
              <Input />
            </Item>
            <Text style={{alignSelf: 'center'}}>0 USD</Text>
            <Button transparent block dark style={styles.mb15}>
            <Text>ADD ALL</Text>
          </Button>
           <Text style={{alignSelf: 'center'}}>Address</Text>
           <Item>
              <Input placeholder="Write address or label name" />
            </Item>
            <Text style={{alignSelf: 'center'}}>Description</Text>
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

export default RestoreWallet;
