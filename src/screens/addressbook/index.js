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

import { getAddressData } from "./address";

import NewAddress from './newaddress'; 

var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name: 'phoreOne', location: 'default'});


class AddressBook extends Component<{}> {

  constructor(props) {
    super(props)
    this.state = {
      label: "",
      address: "start"
    };

  }

   /* async componentWillMount() {
      const rows = await getAddressData();
      this.setState({address: 'success'})
    }*/

    componentWillMount() {
      db.transaction((tx) => {
        tx.executeSql('CREATE TABLE address(id INTEGER PRIMARY KEY AUTOINCREMENT, label TEXT, address TEXT', [], (tx, results) => {
          
          this.setState({address: 'success'});
          })
        })
      
    }

    componentDidMount() {

    }

    
    

  
  
    
  render() {
    const data = [{
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
            <Text>{data[0].label}</Text>
            <Text>{data[0].address}</Text>
            <Text>{'first address is: ' + this.state.address}</Text>
                
               

          </Content>

        
          
       
        
      </Container>
    );
  }

  


}

export default AddressBook;