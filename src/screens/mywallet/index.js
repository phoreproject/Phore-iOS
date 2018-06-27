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
import { StatusBar } from 'react-native';
import styles from "./styles";
import { Grid, Row } from "react-native-easy-grid";
import constants from '../../components/constants';
import phorerate from 'phorerate';


class MyWallet extends Component {
  render() {
    return (
      <Container style={styles.container}>
      <StatusBar barStyle="light-content" />
        <Header>
          <Left>
           <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" style={{ color: 'white'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: 'white' }}>My Wallet</Title>
          </Body>
          <Right>
            
            <Button transparent>
              <Icon name="qr-scanner" style={{ color: 'white'}}/>
            </Button>
            <Button transparent>
              <Icon name="more" style={{ color: 'white'}} />
            </Button>
          </Right>
        </Header>

       
          <Grid>
          <Row size={3} style={{ backgroundColor: "#00d188", justifyContent: 'center' }}>
         
          <Text style={{alignSelf: 'center', fontSize: 30, color: 'white' }}>3.00 PHR</Text>
         
        
          </Row>
          <Row size={1} style={{ backgroundColor: "#00d188", justifyContent: 'center'}}>
         
         
          <Text style={{alignSelf: 'center', fontSize: 16, color: 'white', marginTop: 20 }}>4.99 CAD</Text>
        
          </Row>
          <Row size={8} style={{ backgroundColor: "#FFF" }} />
        </Grid>
       
      </Container>
    );
  }
}

export default MyWallet;