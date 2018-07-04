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
  Input,
  List,
  ListItem
} from "native-base";
import {
  Text,
  View,
  ListView,
  RefreshControl,
  TouchableHighlight,
  StatusBar
} from 'react-native';
import styles from "./styles";

import * as RealmDB from '../../realm/RealmSchemas';

import { getAddressData } from "./address";

import NewAddress from './newaddress'; 

// var SQLite = require('react-native-sqlite-storage');
// var db = SQLite.openDatabase({name: 'phoreOne', location: 'default'});


class AddressBook extends Component {

  constructor(props) {
    super(props)
    this.state = {
      label: "",
      address: "start",
      datas: []
    };

    
  }

   

    componentWillMount() {

    var addresslist = RealmDB.getAddresses();
    this.setState({ datas: addresslist })
      
      
    }

    componentDidMount() {
      // // alert(JSON.stringify(RealmDB.getAddresses()))
      // var addresslist = JSON.stringify(RealmDB.getAddresses());
      // alert(addresslist)

    }

    
    

  
  
    
  render() {
    
   
    const data1 = [{
    label: 'second',
    address: 'PLbrGDauSXskGauvZt4XEkjfVHJo3pNYQY'
    }]
    const datas = this.state.datas;
    return (
      <Container style={styles.container}>
        <Header>
        <StatusBar barStyle="light-content" />
          <Left>
           <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" style={{color: 'white'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'white'}}>Address Book</Title>
          </Body>
          <Right>
            
            
            <Button transparent
            onPress={() => this.props.navigation.navigate("NewAddress")}>
              <Icon name="add" style={{color: 'white'}}/>
            </Button>
          </Right>
        </Header>

      
         <Content>
            
            <List
            dataArray={datas}
            renderRow={data =>
              <ListItem>
                <Body>
                <Text>
                  {data.label} 
                </Text>
                  <Text>
                    {data.address}
                  </Text>
                  </Body>

               
                
              </ListItem>}
          />
                
               

          </Content>

        
          
       
        
      </Container>
    );
  }

  


}

export default AddressBook;