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
  InputGroup,
  Input
} from "native-base";
import {
  Text,
  View,
  ListView,
  RefreshControl,
  TouchableHighlight
} from 'react-native';
import styles from "./styles";

import NewAddress from './newaddress';


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

      
         <Content>

                
               

          </Content>

        
          
       
        
      </Container>
    );
  }

  


}

export default AddressBook;