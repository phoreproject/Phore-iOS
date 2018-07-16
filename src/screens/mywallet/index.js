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
import * as phorerate from '../../components/phorerate';
import * as RealmDB from '../../realm/RealmSchemas';




class MyWallet extends Component {
  state = {
    phore2fiatrate: '1.29',
    phorebalance: 0,
    preferredcurrency: 'USD',
    transactions: {}
  }
  componentWillMount() {
    var prefcur = RealmDB.getPreferredCurrency();
    var address = RealmDB.getReceivingAddress(0);
    phorerate.getTransactions(address).then(response => this.setState({transactions: response}));
    console.log(address)
    console.log(prefcur)
    this.setState({preferredcurrency: prefcur})
    phorerate.getPhoreRate(prefcur).then(response => this.setState({phore2fiatrate: response}))
    phorerate.getPhoreBalance(address).then(response => this.setState({phorebalance: response}))
    
  }
  render() {
    
    const txs = this.state.transactions
    
    if (txs.length > 0) {
      console.log(txs.txs[0])
    }
   
    console.log(this.state.phore2fiatrate)
    const prefcurr = this.state.preferredcurrency
    const phoreb = this.state.phorebalance
    const phorefiatrate = this.state.phore2fiatrate
    const fiatbalance = (phoreb * phorefiatrate).toFixed(2)
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
             <Button transparent onPress={() => this.props.navigation.navigate("Receive")}>
              <Icon name="arrow-down" style={{ color: 'white'}} />
            </Button>
          </Right>
        </Header>

       
          <Grid>
          <Row size={4} style={{ backgroundColor: "#00d188", justifyContent: 'center' }}>
         
          <Text style={{alignSelf: 'center', fontSize: 30, color: 'white', marginTop: 40, marginBottom: 40 }}>{phoreb} PHR</Text>
         
        
          </Row>
          <Row size={2} style={{ backgroundColor: "#00d188", justifyContent: 'center'}}>
         
         
          <Text style={{alignSelf: 'center', fontSize: 16, color: 'white' }}>{fiatbalance} {prefcurr}</Text>
        
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
                <Text style={{alignSelf: 'flex-end', fontSize: 12}}>2018-06-26 03:28</Text>
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