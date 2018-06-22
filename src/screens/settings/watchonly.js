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

class WatchOnly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox1: false
    };
  }
  toggleSwitch1() {
    this.setSate({
      checkbox1: !this.state.checkbox1
    })
  }
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
            <Title>Watch Only</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>

        <Content>
          
          <Text style={{alignSelf: 'center'}}>Make your wallet a Watch Only Wallet importing your xpub from another wallet.</Text>
          <Text style={{alignSelf: 'center'}}>People using this device are going to see the full balance but not be able to spend the coins.</Text>

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
