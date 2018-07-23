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
    transactions: [],
    address: ''
  }
  componentWillMount() {
    var prefcur = RealmDB.getPreferredCurrency();
    var address = RealmDB.getReceivingAddress(0);
    this.setState({address: address})
    console.log(prefcur)
    this.setState({preferredcurrency: prefcur})
    phorerate.getPhoreRate(prefcur).then(response => this.setState({phore2fiatrate: response}))
    phorerate.getPhoreBalance(address).then(response => this.setState({phorebalance: response}))
    
  }

  componentDidMount () {
    var address = this.state.address
    phorerate.getTransactions(address).then(response => {
      let txs = response.txs
      this.setState({transactions: txs})
      let firsttx = txs[0]
      
      let time = firsttx.time_utc
      let amt = firsttx.change / 100000000
      let type
      if (amt > 0) {
        type = 'Receive'
      }
      else if (amt < 0) {
        type = 'Send'
      }


      console.log(type)
    });
  }

  
  render() {
    
    let datas = this.state.transactions
    let txss = this.state.transactions
    if (txss.length < 1) {
      console.log('empty array')
      let datas = [{change: 'loading', amt: 'loading'}]
    }
    else {
      let datas = txss
      let i;
      for (i = 0; i < txss.length; i++) {
        let txamt = txss[i].change / 100000000
        let txtime = txss[i].time_utc
        console.log('amt: ' + txamt + ' time: ' + txtime)
      }

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
          <List dataArray={datas}
            renderRow={(data) => 
              <ListItem>
              <Content>
          <Card>
            <CardItem>
            
              
              <Icon name="arrow-down" />
              <Text>Receive</Text> 
              
              <Right>
                <Text style={{alignSelf: 'flex-end'}}>{data.change / 100000000} PHR</Text>
                <Text style={{alignSelf: 'flex-end', fontSize: 12}}>{data.time_utc}</Text>
              </Right>
            </CardItem>
          </Card>
          </Content>
          </ListItem>
          } />
           

          </Row>
        </Grid>
       
      </Container>
    );
  }
}

export default MyWallet;