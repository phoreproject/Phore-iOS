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
  View,
  Card,
  CardItem,
  List,
  ListItem
} from "native-base";
import { StatusBar } from 'react-native';
import styles from "./styles";
import { Grid, Row } from "react-native-easy-grid";
import constants from '../../components/constants';



class MyWallet extends Component {
  render() {
    return (
      <Container style={styles.container}>
      
        <Header>
        <StatusBar barStyle="light-content" />
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
          <Row size={4} style={{ backgroundColor: "#00d188", justifyContent: 'center' }}>
         
          <Text style={{alignSelf: 'center', fontSize: 30, color: 'white', marginTop: 40, marginBottom: 40 }}>3.00 PHR</Text>
         
        
          </Row>
          <Row size={2} style={{ backgroundColor: "#00d188", justifyContent: 'center'}}>
         
         
          <Text style={{alignSelf: 'center', fontSize: 16, color: 'white' }}>4.99 CAD</Text>
        
          </Row>
           <Row size={1} style={{ backgroundColor: "#141c28", justifyContent: 'center'}}>
         
         
          <Text style={{alignSelf: 'center', fontSize: 12, color: 'white' }}>Amount unspendable: 0 PHR</Text>
        
          </Row>

          <Row size={12} style={{ backgroundColor: "#FFF" }} >
          <Card>
            <CardItem>
              <Icon name="arrow-down" />
              <Text>Receive</Text>
              <Right>
                <Text style={{alignSelf: 'flex-end'}}>3.00 PHR</Text>
              </Right>
            </CardItem>
          </Card>
          
           

          </Row>
        </Grid>
       
      </Container>
    );
  }
}

export default MyWallet;