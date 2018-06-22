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

class RestoreMnemonic extends Component {
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
            <Title>Restore Mnemonic</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>

        <Content>
          
          <Text style={{alignSelf: 'center'}}>To restore your wallet you must enter the 24 words of your mnemonic code in the right order</Text>
          <Form>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
         <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
         <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
          <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>
         <Item regular style={{ marginLeft: 15, margin: 15, marginTop: 15 }}>
              <Input placeholder="" />
          </Item>

          <Button bordered dark block style={{ margin: 15, marginTop: 15 }}
           onPress={() => this.props.navigation.navigate("RestoreWallet")}>
            <Text>Confirm</Text>
          </Button>

          </Form>
          
        </Content>
      </Container>
    );
  }
}

export default RestoreMnemonic;
