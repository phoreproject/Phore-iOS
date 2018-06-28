import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Picker,
  Spinner,
  InputGroup,
  List,
  ListItem
} from "native-base";
import {
  TouchableHighlight,
  Text,
  ToastAndroid
} from 'react-native';
import styles from "./styles";
import * as RealmDB from '../../realm/RealmSchemas';


class NewAddress extends Component {

  constructor(props) {
    super(props);

    this.state = {
      address: '',
      label: ''
    }


  }
  

  render() {
    

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>New Address Label</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Text>SAVE</Text>
            </Button>
          </Right>
        </Header>

      <Content>
          <Form>
           
            <Item floatingLabel>
              <Label style={{alignSelf: 'center'}}>Address</Label>
              <Input 
              onChangeText={ (address) => this.setState({address})}
              value={this.state.address}/>
            </Item>
           
          
          
           <Item floatingLabel>
              <Label style={{alignSelf: 'center'}}>Label</Label>
              <Input 
              onChangeText={ (label) => this.setState({label})}
              value={this.state.label}/>
            </Item>
           <Button bordered dark block style={{ margin: 15, marginTop: 50 }} 
           onPress={() => {
                            if (this.state.address.trim() == "") {
                                alert("Please enter address' value");
                                return;
                            }
                            else {
                              const newAddressItem = {
                                address: this.state.address,
                                label: this.state.label
                              }
                              RealmDB.createAddressItem(newAddressItem);
                            }

                            }}>
            <Text>Save</Text>
          </Button>
          </Form>
      </Content>
      </Container>
    );
  }
}

export default NewAddress;
