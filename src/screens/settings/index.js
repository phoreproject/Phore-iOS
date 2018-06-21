import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

class SettingsList extends Component {
  render() {
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
            <Title>Settings</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem itemDivider>
            <Text>SECURITY</Text>
          </ListItem>
          <ListItem onPress={() => this.props.navigation.navigate("BackupWallet")}>
          
            <Text>Backup Wallet</Text>
            
          </ListItem>
          <ListItem onPress={() => this.props.navigation.navigate("RestoreWallet")}>
            <Text>Restore Wallet</Text>
          </ListItem>
          <ListItem onPress={() => this.props.navigation.navigate("ExportAccount")}>
            <Text>Export Wallet</Text>
          </ListItem>
          <ListItem onPress={() => this.props.navigation.navigate("WatchOnly")}>
            <Text>Watch only mode</Text>
          </ListItem>
          <ListItem onPress={() => this.props.navigation.navigate("UpdatePin")}>
            <Text>Change PIN code</Text>
          </ListItem>
          <ListItem last>
            <Text>Reset blockchain</Text>
          </ListItem>

          <ListItem itemDivider>
            <Text>PREFERENCE</Text>
          </ListItem>
          <ListItem onPress={() => this.props.navigation.navigate("CurrencyRates")}>
            <Text>Currency Rate</Text>
          </ListItem>
          

          <ListItem itemDivider>
            <Text>ABOUT</Text>
          </ListItem>
          <ListItem onPress={() => this.props.navigation.navigate("NetworkMonitor")}>
            <Text>Network monitor</Text>
          </ListItem>
          <ListItem>
            <Text>Report issue</Text>
          </ListItem>
          <ListItem last>
            <Text>Support</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default SettingsList;
