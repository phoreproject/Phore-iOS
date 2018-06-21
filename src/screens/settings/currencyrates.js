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
  Text,
  List,
  ListItem
} from "native-base";
import styles from "./styles";

class CurrencyRates extends Component {
  render() {
    const datas = [{"code":"USD","name":"US Dollar","rate":6710.22},{"code":"BTC","name":"Bitcoin","rate":1},{"code":"BCH","name":"Bitcoin Cash","rate":7.720706},{"code":"EUR","name":"Eurozone Euro","rate":5780.76},{"code":"GBP","name":"Pound Sterling","rate":5065.263249},{"code":"JPY","name":"Japanese Yen","rate":737332.39404},{"code":"CAD","name":"Canadian Dollar","rate":8933.349437},{"code":"AUD","name":"Australian Dollar","rate":9089.697563},{"code":"CNY","name":"Chinese Yuan","rate":43564.090284},{"code":"CHF","name":"Swiss Franc","rate":6650.639957},{"code":"SEK","name":"Swedish Krona","rate":59661.639655},{"code":"NZD","name":"New Zealand Dollar","rate":9754.358275},{"code":"KRW","name":"South Korean Won","rate":7456698.4239},{"code":"AED","name":"UAE Dirham","rate":24647.812349},{"code":"AFN","name":"Afghan Afghani","rate":480615.568601},{"code":"ALL","name":"Albanian Lek","rate":730742.958},{"code":"AMD","name":"Armenian Dram","rate":3234670.301127},{"code":"ANG","name":"Netherlands Antillean Guilder","rate":12181.310644},{"code":"AOA","name":"Angolan Kwanza","rate":1652837.90463},{"code":"ARS","name":"Argentine Peso","rate":184866.561},{"code":"AWG","name":"Aruban Florin","rate":11994.51154},{"code":"AZN","name":"Azerbaijani Manat","rate":11424.14955},{"code":"BAM","name":"Bosnia-Herzegovina Convertible Mark","rate":11375.849386},{"code":"BBD","name":"Barbadian Dollar","rate":13420.44},{"code":"BDT","name":"Bangladeshi Taka","rate":567120.618009},{"code":"BGN","name":"Bulgarian Lev","rate":11364.898307},{"code":"BHD","name":"Bahraini Dinar","rate":2538.409124},{"code":"BIF","name":"Burundian Franc","rate":11977742.7},{"code":"BMD","name":"Bermudan Dollar","rate":6710.22},{"code":"BND","name":"Brunei Dollar","rate":10137.424604},{"code":"BOB","name":"Bolivian Boliviano","rate":46302.866577},{"code":"BRL","name":"Brazilian Real","rate":25447.033102},{"code":"BSD","name":"Bahamian Dollar","rate":6710.22},{"code":"BTN","name":"Bhutanese Ngultrum","rate":456864.71807},{"code":"BWP","name":"Botswanan Pula","rate":69804.942412},{"code":"BZD","name":"Belize Dollar","rate":13489.917618},{"code":"CDF","name":"Congolese Franc","rate":10843715.52},{"code":"CLF","name":"Chilean Unit of Account (UF)","rate":156.683637},{"code":"CLP","name":"Chilean Peso","rate":4297895.91},{"code":"COP","name":"Colombian Peso","rate":19820614.2849},{"code":"CRC","name":"Costa Rican Colón","rate":3806003.2329},{"code":"CUP","name":"Cuban Peso","rate":171110.61},{"code":"CVE","name":"Cape Verdean Escudo","rate":640144.92267},{"code":"CZK","name":"Czech Koruna","rate":149461.091703},{"code":"DJF","name":"Djiboutian Franc","rate":1194586.9155},{"code":"DKK","name":"Danish Krone","rate":43048.416587},{"code":"DOP","name":"Dominican Peso","rate":331853.9301},{"code":"DZD","name":"Algerian Dinar","rate":787823.102209},{"code":"EGP","name":"Egyptian Pound","rate":119932.627678},{"code":"ETB","name":"Ethiopian Birr","rate":185235.6231},{"code":"FJD","name":"Fijian Dollar","rate":14106.553285},{"code":"FKP","name":"Falkland Islands Pound","rate":5065.263249},{"code":"GEL","name":"Georgian Lari","rate":16479.917837},{"code":"GHS","name":"Ghanaian Cedi","rate":31806.4428},{"code":"GIP","name":"Gibraltar Pound","rate":5065.263249},{"code":"GMD","name":"Gambian Dalasi","rate":317091.4461},{"code":"GNF","name":"Guinean Franc","rate":60593286.6},{"code":"GTQ","name":"Guatemalan Quetzal","rate":50283.798535},{"code":"GYD","name":"Guyanaese Dollar","rate":1402905.6954},{"code":"HKD","name":"Hong Kong Dollar","rate":52644.695499},{"code":"HNL","name":"Honduran Lempira","rate":161211.908183},{"code":"HRK","name":"Croatian Kuna","rate":42675.563213},{"code":"HTG","name":"Haitian Gourde","rate":446825.839757},{"code":"HUF","name":"Hungarian Forint","rate":1885051.77795},{"code":"IDR","name":"Indonesian Rupiah","rate":94232369.924295},{"code":"ILS","name":"Israeli Shekel","rate":24300.592015},{"code":"INR","name":"Indian Rupee","rate":455254.8759},{"code":"IQD","name":"Iraqi Dinar","rate":7975096.47},{"code":"IRR","name":"Iranian Rial","rate":285190456.60887},{"code":"ISK","name":"Icelandic Króna","rate":731615.2866},{"code":"JEP","name":"Jersey Pound","rate":5065.263249},{"code":"JMD","name":"Jamaican Dollar","rate":880448.301711},{"code":"JOD","name":"Jordanian Dinar","rate":4767.61131},{"code":"KES","name":"Kenyan Shilling","rate":676037.88945},{"code":"KGS","name":"Kyrgystani Som","rate":458201.494547},{"code":"KHR","name":"Cambodian Riel","rate":27243493.2},{"code":"KMF","name":"Comorian Franc","rate":2852850.033},{"code":"KPW","name":"North Korean Won","rate":6039198},{"code":"KWD","name":"Kuwaiti Dinar","rate":2030.834663},{"code":"KYD","name":"Cayman Islands Dollar","rate":5593.069023},{"code":"KZT","name":"Kazakhstani Tenge","rate":2291281.222872},{"code":"LAK","name":"Laotian Kip","rate":56489987.07},{"code":"LBP","name":"Lebanese Pound","rate":10175042.097},{"code":"LKR","name":"Sri Lankan Rupee","rate":1069717.05557},{"code":"LRD","name":"Liberian Dollar","rate":961298.239402},{"code":"LSL","name":"Lesotho Loti","rate":91560.9519},{"code":"LYD","name":"Libyan Dinar","rate":9125.8992},{"code":"MAD","name":"Moroccan Dirham","rate":63956.858187},{"code":"MDL","name":"Moldovan Leu","rate":113617.639636},{"code":"MGA","name":"Malagasy Ariary","rate":22378583.7},{"code":"MKD","name":"Macedonian Denar","rate":355828.855007},{"code":"MMK","name":"Myanma Kyat","rate":9207160.366813},{"code":"MNT","name":"Mongolian Tugrik","rate":16316367.867192},{"code":"MOP","name":"Macanese Pataca","rate":54234.319776},{"code":"MRU","name":"Mauritanian Ouguiya","rate":239722.6095},{"code":"MUR","name":"Mauritian Rupee","rate":235515.30156},{"code":"MVR","name":"Maldivian Rufiyaa","rate":103338.233488},{"code":"MWK","name":"Malawian Kwacha","rate":4983825.784337},{"code":"MXN","name":"Mexican Peso","rate":136503.952133},{"code":"MYR","name":"Malaysian Ringgit","rate":26875.826826},{"code":"MZN","name":"Mozambican Metical","rate":399233.416521},{"code":"NAD","name":"Namibian Dollar","rate":91463.318199},{"code":"NGN","name":"Nigerian Naira","rate":2422389.42},{"code":"NIO","name":"Nicaraguan Córdoba","rate":212713.974},{"code":"NOK","name":"Norwegian Krone","rate":54536.440721},{"code":"NPR","name":"Nepalese Rupee","rate":730838.008266},{"code":"OMR","name":"Omani Rial","rate":2583.266945},{"code":"PAB","name":"Panamanian Balboa","rate":6710.22},{"code":"PEN","name":"Peruvian Nuevo Sol","rate":21996.067609},{"code":"PGK","name":"Papua New Guinean Kina","rate":21969.26028},{"code":"PHP","name":"Philippine Peso","rate":358124.4414},{"code":"PKR","name":"Pakistani Rupee","rate":816297.591978},{"code":"PLN","name":"Polish Zloty","rate":25013.821298},{"code":"PYG","name":"Paraguayan Guarani","rate":38253971.939507},{"code":"QAR","name":"Qatari Rial","rate":24431.91102},{"code":"RON","name":"Romanian Leu","rate":26984.465288},{"code":"RSD","name":"Serbian Dinar","rate":681995.719322},{"code":"RUB","name":"Russian Ruble","rate":426855.882816},{"code":"RWF","name":"Rwandan Franc","rate":5777499.42},{"code":"SAR","name":"Saudi Riyal","rate":25166.009088},{"code":"SBD","name":"Solomon Islands Dollar","rate":53246.910903},{"code":"SCR","name":"Seychellois Rupee","rate":90862.451549},{"code":"SDG","name":"Sudanese Pound","rate":121247.26043},{"code":"SGD","name":"Singapore Dollar","rate":9111.143426},{"code":"SHP","name":"Saint Helena Pound","rate":5065.263249},{"code":"SLL","name":"Sierra Leonean Leone","rate":42308165.093145},{"code":"SOS","name":"Somali Shilling","rate":3891927.6},{"code":"SRD","name":"Surinamese Dollar","rate":50111.92296},{"code":"STN","name":"São Tomé and Príncipe Dobra","rate":142156.0107},{"code":"SVC","name":"Salvadoran Colón","rate":58727.778338},{"code":"SYP","name":"Syrian Pound","rate":3455830.335098},{"code":"SZL","name":"Swazi Lilangeni","rate":91560.9519},{"code":"THB","name":"Thai Baht","rate":220632.0336},{"code":"TJS","name":"Tajikistani Somoni","rate":61102.934519},{"code":"TMT","name":"Turkmenistani Manat","rate":23485.676057},{"code":"TND","name":"Tunisian Dinar","rate":17470.728792},{"code":"TOP","name":"Tongan Paʻanga","rate":15374.180945},{"code":"TRY","name":"Turkish Lira","rate":31696.240857},{"code":"TTD","name":"Trinidad and Tobago Dollar","rate":45234.599553},{"code":"TWD","name":"New Taiwan Dollar","rate":203514.26238},{"code":"TZS","name":"Tanzanian Shilling","rate":15272796.231},{"code":"UAH","name":"Ukrainian Hryvnia","rate":176472.07578},{"code":"UGX","name":"Ugandan Shilling","rate":26232521.134482},{"code":"UYU","name":"Uruguayan Peso","rate":212334.685525},{"code":"UZS","name":"Uzbekistan Som","rate":52943635.8},{"code":"VEF","name":"Venezuelan Bolívar Fuerte","rate":536146578},{"code":"VND","name":"Vietnamese Dong","rate":153384458.663215},{"code":"VUV","name":"Vanuatu Vatu","rate":724600.825225},{"code":"WST","name":"Samoan Tala","rate":17315.273125},{"code":"XAF","name":"CFA Franc BEAC","rate":3789340.179738},{"code":"XCD","name":"East Caribbean Dollar","rate":18134.705061},{"code":"XOF","name":"CFA Franc BCEAO","rate":3789340.179738},{"code":"XPF","name":"CFP Franc","rate":689357.025259},{"code":"YER","name":"Yemeni Rial","rate":1679568.066},{"code":"ZAR","name":"South African Rand","rate":91073.434286},{"code":"ZMW","name":"Zambian Kwacha","rate":67618.88694},{"code":"ZWL","name":"Zimbabwean Dollar","rate":2163073.041912},{"code":"XAG","name":"Silver (troy ounce)","rate":410.700491},{"code":"XAU","name":"Gold (troy ounce)","rate":5.289801}];
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Rates</Title>
          </Body>
          <Right>
            
          </Right>
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem>
                <Left>
                  <Text>
                    {data.code}
                  </Text>
                </Left>
                
              </ListItem>}
          />

          
        </Content>
      </Container>
    );
  }
}

export default CurrencyRates;
