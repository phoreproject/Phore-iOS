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


class NewAddress extends Component {
  

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

       {content}
      </Container>
    );
  }
}

export default NewAddress;
