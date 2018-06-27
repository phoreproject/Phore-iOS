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
  TouchableHighlight,
  FlatList
} from 'react-native';
import styles from "./styles";












class AddressBook extends Component<{}> {

  constructor(props) {
    super(props)
    this.state = {
      /*label: "",
      address: "start"*/
      Addresses: []
    };

    




  }

  

   /* async componentWillMount() {
      const rows = await getAddressData();
      this.setState({address: 'success'})
    }*/

    componentWillMount() {
      


      
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
            onPress={() => this.props.navigation.navigate()}>
              <Icon name="add" />
            </Button>
          </Right>
        </Header>

      
         <Content>
            <Text>{data[0].label}</Text>
            <Text>{data[0].address}</Text>
            <Text>{'first address is: ' + data[0].address}</Text>

          


            

                
               

          </Content>

        
          
       
        
      </Container>
    );
  }

  


}

export default AddressBook;