import React, { Component } from "react";
import { View, AppRegistry, ListView } from "react-native";
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
  Text,
  List,
  ListItem,
  Badge
} from "native-base";
import styles from "./styles1";


class BackupMnemonic extends Component {
  render() {
    const datas = ["artefact", "intact", "reward", "frog", "bid", "save", "hover", "fork", "gather", "liquid", "earth", "thunderfurnace", "fragile", "motion", "ten", "staff", "cave", "quality", "secret", "best", "exotic", "lake", "six"]
    return (
      <Container style={styles.container}>
        <Header iosBarStyle="light-content">
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{ color: 'white'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{ color: 'white'}}>Mnemonic Code</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>

        <Content>
          
            <Text style={{alignSelf: 'center', marginLeft: 12, marginRight: 12, marginTop: 20}}>Please write this in a safe place and in horizontal order. You will need them to restore your wallet.</Text>
           
            <Text style={{alignSelf: 'center', marginLeft: 12, marginRight: 12, marginTop: 20}}>Do not share these words with anyone. Be careful, whoever has these words is the owner of the coins!</Text>

            <Text style={{alignSelf: 'center', marginLeft: 12, marginRight: 12, marginTop: 20}}>When you are done writing down the words, hit 'Confirm'.</Text>
           
            <View
            style={{ flexDirection: "row" }}
          >
          <List
            dataArray={datas}
            horizontal={true}
            renderRow={data =>
              <ListItem>
          <Badge info style={styles.mb15}>
            <Text>{data}</Text>
          </Badge>
            </ListItem>}
         />

          </View>

          <Button bordered dark block style={{ margin: 15, marginTop: 20 }}
          onPress={() => this.props.navigation.navigate("MyWallet")}>
            <Text>Confirm</Text>
          </Button>
            
         

          
        </Content>
      </Container>
    );
  }
}

export default BackupMnemonic;
