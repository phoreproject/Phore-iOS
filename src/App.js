import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import "../shim";
const bitcoin = require('bitcoinjs-lib');
const phore = bitcoin.networks.phore;



import SettingsList from "./screens/settings/";
import Send from "./screens/send/";
import MyWallet from "./screens/mywallet/";
import AddressBook from "./screens/addressbook";
import NewAddress from "./screens/addressbook/newaddress";
import MultiSend from "./screens/send/multisend";
import CustomFee from "./screens/send/customfee";
import ChangeAddress from "./screens/send/changeaddress";
import Receive from "./screens/receive/";
import BackupWallet from "./screens/settings/backupwallet";
import BackupMnemonic from "./screens/settings/backupmnemonic";
import ExportAccount from "./screens/settings/exportaccount";
import WatchOnly from "./screens/settings/watchonly";
import UpdatePin from "./screens/settings/updatepin";
import CurrencyRates from "./screens/settings/currencyrates";
import NetworkMonitor from "./screens/settings/networkmonitor";
import RestoreMnemonic from "./screens/settings/restoremnemonic";
import RestoreWallet from "./screens/settings/restorewallet";
import SideBar from "./screens/sidebar";



import Home from "./screens/home/";


const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    
    SettingsList: { screen: SettingsList },
    MyWallet: { screen: MyWallet },
    AddressBook: { screen: AddressBook },
    Receive: { screen: Receive }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },

    
    SettingsList: { screen: SettingsList },
    Send: { screen: Send },
    MyWallet: { screen: MyWallet },
    AddressBook: { screen: AddressBook },
    NewAddress: { screen: NewAddress },
    Receive: { screen: Receive },
    BackupWallet: { screen: BackupWallet },
    BackupMnemonic: { screen: BackupMnemonic },
    ExportAccount: { screen: ExportAccount },
    WatchOnly: { screen: WatchOnly },
    UpdatePin: { screen: UpdatePin },
    CurrencyRates: { screen: CurrencyRates },
    NetworkMonitor: { screen: NetworkMonitor },
    RestoreMnemonic: { screen: RestoreMnemonic },
    RestoreWallet: { screen: RestoreWallet }



  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
