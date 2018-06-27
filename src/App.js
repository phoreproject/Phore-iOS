import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";


import Header from "./screens/Header/";
import Header1 from "./screens/Header/1";
import Header2 from "./screens/Header/2";
import Header3 from "./screens/Header/3";
import Header4 from "./screens/Header/4";
import Header5 from "./screens/Header/5";
import Header6 from "./screens/Header/6";
import Header7 from "./screens/Header/7";
import Header8 from "./screens/Header/8";
import HeaderSpan from "./screens/Header/header-span";
import HeaderNoShadow from "./screens/Header/header-no-shadow";
import HeaderTransparent from "./screens/Header/header-transparent";
import BasicFooter from "./screens/footer/basicFooter";
import IconFooter from "./screens/footer/iconFooter";
import IconText from "./screens/footer/iconText";
import BadgeFooter from "./screens/footer/badgeFooter";
import Default from "./screens/button/default";
import Outline from "./screens/button/outline";
import Rounded from "./screens/button/rounded";
import Block from "./screens/button/block";
import Full from "./screens/button/full";
import Custom from "./screens/button/custom";
import Transparent from "./screens/button/transparent";
import IconBtn from "./screens/button/iconBtn";
import Disabled from "./screens/button/disabled";
import BasicCard from "./screens/card/basic";
import NHCardItemBordered from "./screens/card/carditem-bordered";
import NHCardItemButton from "./screens/card/carditem-button";
import NHCardImage from "./screens/card/card-image";
import NHCardShowcase from "./screens/card/card-showcase";
import NHCardList from "./screens/card/card-list";
import NHCardHeaderAndFooter from "./screens/card/card-header-and-footer";
import NHCardTransparent from "./screens/card/card-transparent";
import NHCardCustomBorderRadius from "./screens/card/card-custom-border-radius";
import BasicFab from "./screens/fab/basic";
import MultipleFab from "./screens/fab/multiple";
import FixedLabel from "./screens/form/fixedLabel";
import InlineLabel from "./screens/form/inlineLabel";
import FloatingLabel from "./screens/form/floatingLabel";
import PlaceholderLabel from "./screens/form/placeholder";
import StackedLabel from "./screens/form/stacked";
import RegularInput from "./screens/form/regular";
import UnderlineInput from "./screens/form/underline";
import RoundedInput from "./screens/form/rounded";
import IconInput from "./screens/form/iconInput";
import SuccessInput from "./screens/form/success";
import ErrorInput from "./screens/form/error";
import DisabledInput from "./screens/form/disabledInput";
import Icons from "./screens/icon/icon";
import BasicIcon from "./screens/icon/basic";
import StateIcon from "./screens/icon/state";
import PlatformSpecificIcon from "./screens/icon/platform-specific";
import IconFamily from "./screens/icon/icon-family";
import RowNB from "./screens/layout/row";
import ColumnNB from "./screens/layout/column";
import NestedGrid from "./screens/layout/nested";
import CustomRow from "./screens/layout/customRow";
import CustomCol from "./screens/layout/customCol";
import BasicListSwipe from "./screens/listSwipe/basic-list-swipe";
import SwipeRowCustomStyle from "./screens/listSwipe/swipe-row-style";
import MultiListSwipe from "./screens/listSwipe/multi-list-swipe";
import NHBasicList from "./screens/list/basic-list";
import NHListItemSelected from "./screens/list/listitem-selected";
import NHListDivider from "./screens/list/list-divider";
import NHListSeparator from "./screens/list/list-separator";
import NHListHeader from "./screens/list/list-headers";
import NHListIcon from "./screens/list/list-icon";
import NHListAvatar from "./screens/list/list-avatar";
import NHListThumbnail from "./screens/list/list-thumbnail";
import NHListItemNoIndent from "./screens/list/listitem-noIndent";
import RegularPicker from "./screens/picker/regularPicker";
import PickerWithIcon from "./screens/picker/picker-with-icon";
import PlaceholderPicker from "./screens/picker/placeholderPicker";
import PlaceholderPickerNote from "./screens/picker/placeholderPickernote";
import BackButtonPicker from "./screens/picker/backButtonPicker";
import PickerTextItemText from "./screens/picker/picker-text-itemtext";
import HeaderPicker from "./screens/picker/headerPicker";
import HeaderStylePicker from "./screens/picker/headerStylePicker";
import CustomHeaderPicker from "./screens/picker/customHeaderPicker";
import BasicTab from "./screens/tab/basicTab";
import ConfigTab from "./screens/tab/configTab";
import ScrollableTab from "./screens/tab/scrollableTab";
import BasicSegment from "./screens/segment/SegmentHeader";
import SegmentHeaderIcon from "./screens/segment/SegmentHeaderIcon";
import BasicToast from "./screens/toast/basic-toast";
import ToastDuration from "./screens/toast/toast-duration";
import ToastPosition from "./screens/toast/toast-position";
import ToastType from "./screens/toast/toast-type";
import ToastText from "./screens/toast/toast-text";
import ToastButton from "./screens/toast/toast-button";
import AdvSegment from "./screens/segment/segmentTab";
import SimpleDeck from "./screens/deckswiper/simple";
import AdvancedDeck from "./screens/deckswiper/advanced";
import HeaderNoLeft from "./screens/Header/header-noLeft";
import NHCustomRadio from "./screens/radio/custom";
import NHDefaultRadio from "./screens/radio/default";
import PickerWithIconStyle from "./screens/picker/picker-with-iconstyle";
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




import Home from "./screens/home/";
import Footer from "./screens/footer/";
import NHBadge from "./screens/badge/";
import NHButton from "./screens/button/";
import NHCard from "./screens/card/";
import NHCheckbox from "./screens/checkbox/";
import NHDeckSwiper from "./screens/deckswiper/";
import NHFab from "./screens/fab/";
import NHForm from "./screens/form/";
import TextArea from "./screens/form/textArea";
import NHIcon from "./screens/icon/";
import ListSwipe from "./screens/listSwipe/";
import NHLayout from "./screens/layout/";
import NHList from "./screens/list/";
import NHRadio from "./screens/radio/";
import NHSearchbar from "./screens/searchbar/";
import NHSpinner from "./screens/spinner/";
import NHPicker from "./screens/picker/";
import NHTab from "./screens/tab/";
import NHThumbnail from "./screens/thumbnail/";
import NHTypography from "./screens/typography/";
import SideBar from "./screens/sidebar";
import Segment from "./screens/segment";
import NHToast from "./screens/toast/";
import NHDatePicker from "./screens/datepicker/";

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    Header: { screen: Header },
    Footer: { screen: Footer },
    NHBadge: { screen: NHBadge },
    NHButton: { screen: NHButton },
    NHCard: { screen: NHCard },
    NHCheckbox: { screen: NHCheckbox },
    NHDeckSwiper: { screen: NHDeckSwiper },
    NHFab: { screen: NHFab },
    NHForm: { screen: NHForm },
    NHIcon: { screen: NHIcon },
    NHLayout: { screen: NHLayout },
    NHList: { screen: NHList },
    ListSwipe: { screen: ListSwipe },
    NHRadio: { screen: NHRadio },
    NHSearchbar: { screen: NHSearchbar },
    NHSpinner: { screen: NHSpinner },
    NHPicker: { screen: NHPicker },
    NHTab: { screen: NHTab },
    NHThumbnail: { screen: NHThumbnail },
    NHTypography: { screen: NHTypography },
    Segment: { screen: Segment },
    NHToast: { screen: NHToast },
    NHDatePicker: { screen: NHDatePicker },
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

    Header1: { screen: Header1 },
    Header2: { screen: Header2 },
    Header3: { screen: Header3 },
    Header4: { screen: Header4 },
    Header5: { screen: Header5 },
    Header6: { screen: Header6 },
    Header7: { screen: Header7 },
    Header8: { screen: Header8 },
    HeaderSpan: { screen: HeaderSpan },
    HeaderNoShadow: { screen: HeaderNoShadow },
    HeaderNoLeft: { screen: HeaderNoLeft },
    HeaderTransparent: { screen: HeaderTransparent },

    BasicFooter: { screen: BasicFooter },
    IconFooter: { screen: IconFooter },
    IconText: { screen: IconText },
    BadgeFooter: { screen: BadgeFooter },

    Default: { screen: Default },
    Outline: { screen: Outline },
    Rounded: { screen: Rounded },
    Block: { screen: Block },
    Full: { screen: Full },
    Custom: { screen: Custom },
    Transparent: { screen: Transparent },
    IconBtn: { screen: IconBtn },
    Disabled: { screen: Disabled },

    BasicCard: { screen: BasicCard },
    NHCardItemBordered: { screen: NHCardItemBordered },
    NHCardItemButton: { screen: NHCardItemButton },
    NHCardImage: { screen: NHCardImage },
    NHCardShowcase: { screen: NHCardShowcase },
    NHCardList: { screen: NHCardList },
    NHCardHeaderAndFooter: { screen: NHCardHeaderAndFooter },
    NHCardTransparent: { screen: NHCardTransparent },
    NHCardCustomBorderRadius: { screen: NHCardCustomBorderRadius },

    SimpleDeck: { screen: SimpleDeck },
    AdvancedDeck: { screen: AdvancedDeck },

    BasicFab: { screen: BasicFab },
    MultipleFab: { screen: MultipleFab },

    FixedLabel: { screen: FixedLabel },
    InlineLabel: { screen: InlineLabel },
    FloatingLabel: { screen: FloatingLabel },
    PlaceholderLabel: { screen: PlaceholderLabel },
    StackedLabel: { screen: StackedLabel },
    RegularInput: { screen: RegularInput },
    UnderlineInput: { screen: UnderlineInput },
    RoundedInput: { screen: RoundedInput },
    IconInput: { screen: IconInput },
    SuccessInput: { screen: SuccessInput },
    ErrorInput: { screen: ErrorInput },
    DisabledInput: { screen: DisabledInput },
    TextArea: { screen: TextArea },

    Icons: { screen: Icons },
    BasicIcon: { screen: BasicIcon },
    StateIcon: { screen: StateIcon },
    PlatformSpecificIcon: { screen: PlatformSpecificIcon },
    IconFamily: { screen: IconFamily },

    RowNB: { screen: RowNB },
    ColumnNB: { screen: ColumnNB },
    NestedGrid: { screen: NestedGrid },
    CustomRow: { screen: CustomRow },
    CustomCol: { screen: CustomCol },

    NHBasicList: { screen: NHBasicList },
    NHListItemSelected: { screen: NHListItemSelected },
    NHListDivider: { screen: NHListDivider },
    NHListSeparator: { screen: NHListSeparator },
    NHListHeader: { screen: NHListHeader },
    NHListIcon: { screen: NHListIcon },
    NHListAvatar: { screen: NHListAvatar },
    NHListThumbnail: { screen: NHListThumbnail },
    NHListItemNoIndent: { screen: NHListItemNoIndent },
    SettingsList: { screen: SettingsList },
    Send: { screen: Send },
    MyWallet: { screen: MyWallet },
    AddressBook: { screen: AddressBook },
    MultiSend: { screen: MultiSend },
    CustomFee: { screen: CustomFee },
    ChangeAddress: { screen: ChangeAddress },
    Receive: { screen: Receive },
    BackupWallet: { screen: BackupWallet },
    BackupMnemonic: { screen: BackupMnemonic },
    ExportAccount: { screen: ExportAccount },
    WatchOnly: { screen: WatchOnly },
    UpdatePin: { screen: UpdatePin },
    CurrencyRates: { screen: CurrencyRates },
    NetworkMonitor: { screen: NetworkMonitor },
    RestoreMnemonic: { screen: RestoreMnemonic },
    RestoreWallet: { screen: RestoreWallet },



    BasicListSwipe: { screen: BasicListSwipe },
    SwipeRowCustomStyle: { screen: SwipeRowCustomStyle },
    MultiListSwipe: { screen: MultiListSwipe },

    RegularPicker: { screen: RegularPicker },
    PickerWithIcon: { screen: PickerWithIcon },
    PlaceholderPicker: { screen: PlaceholderPicker },
    PlaceholderPickerNote: { screen: PlaceholderPickerNote },
    BackButtonPicker: { screen: BackButtonPicker },
    PickerTextItemText: { screen: PickerTextItemText },
    HeaderPicker: { screen: HeaderPicker },
    HeaderStylePicker: { screen: HeaderStylePicker },
    CustomHeaderPicker: { screen: CustomHeaderPicker },
    PickerWithIconStyle: { screen: PickerWithIconStyle },

    NHCustomRadio: { screen: NHCustomRadio },
    NHDefaultRadio: { screen: NHDefaultRadio },

    BasicTab: { screen: BasicTab },
    ConfigTab: { screen: ConfigTab },
    ScrollableTab: { screen: ScrollableTab },

    BasicSegment: { screen: BasicSegment },
    AdvSegment: { screen: AdvSegment },
    SegmentHeaderIcon: { screen: SegmentHeaderIcon },

    BasicToast: { screen: BasicToast },
    ToastDuration: { screen: ToastDuration },
    ToastPosition: { screen: ToastPosition },
    ToastType: { screen: ToastType },
    ToastText: { screen: ToastText },
    ToastButton: { screen: ToastButton }
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
