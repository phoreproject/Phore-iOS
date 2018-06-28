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
  TouchableHighlight
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

    
      
      
    }

    componentDidMount() {
      // alert(JSON.stringify(RealmDB.getAddresses()))
      var addresslist = JSON.stringify(RealmDB.getAddresses());
      alert(addresslist)

    }

    
    

  
  
    
  render() {
    
   
    const data1 = [{
    label: 'second',
    address: 'PLbrGDauSXskGauvZt4XEkjfVHJo3pNYQY'
    }]
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
            <Text>{'yo'}</Text>
            <Text>{data1[0].address}</Text>
            <Text>{'first address is: ' + this.state.address}</Text>
            <List
            dataArray={this.state.datas}
            renderRow={data =>
              <ListItem>
                <Left>
                  <Text>
                    {data.address}
                  </Text>
                </Left>
                
              </ListItem>}
          />
                
               

          </Content>

        
          
       
        
      </Container>
    );
  }

  


}

export default AddressBook;