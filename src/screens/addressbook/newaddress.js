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
  Text
} from "native-base";
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

        <Content>
          <Form>
            <Text>Name</Text>
            <Item>
              <Input placeholder="Add name" />
            </Item>
            <Text>Address</Text>
           <Item>
              <Input placeholder="Write address or label name" />
            </Item>
           
          </Form>
         

          
        </Content>
      </Container>
    );
  }
}

export default NewAddress;
