import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  Fab,
  View
} from "native-base";
import styles from "./styles";

class MyWallet extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
           <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>My Wallet</Title>
          </Body>
          <Right>
            
            <Button transparent>
              <Icon name="qr-scanner" />
            </Button>
            <Button transparent>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <Text>Header with multiple Icon Buttons</Text>

        
          
       
        </Content>
      </Container>
    );
  }
}

export default MyWallet;