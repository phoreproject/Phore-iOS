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

class AddressBook extends Component {
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
            <Title>Address Book</Title>
          </Body>
          <Right>
            
            
            <Button transparent
            onPress={() => this.props.navigation.navigate("NewAddress")}>
              <Icon name="add" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <Text>Add your first address</Text>

        
          
       
        </Content>
      </Container>
    );
  }
}

export default AddressBook;