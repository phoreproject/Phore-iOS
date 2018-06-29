import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/phorelogo.png");

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
       
        <View style={{ backgroundColor: "#141c28", flex: 1}}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 50,
              backgroundColor: "transparent"
            }}
          >
            <H3 style={styles.text}></H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}></H3>
            <View style={{ marginTop: 8 }} />
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button
              style={{ backgroundColor: "#00d188", alignSelf: "center", marginBottom: 8 }}
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Text>Create Wallet</Text>
            </Button>
            <Button
              style={{ backgroundColor: "#232c38", alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate("RestoreWallet")}
            >
              <Text>Import Wallet</Text>
            </Button>

          </View>
       
        </View>
      </Container>
    );
  }
}

export default Home;
