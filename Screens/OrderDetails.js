 
 

 import React, {Component} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

/*Starting functional components/////////////////////////////*/
class OrderDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      text: '',
      data: [],
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    return fetch('http://100.117.225.81:4548/orders')
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        this.setState(
          {
            isLoading: false,
            data: responseJson,
          },
          () => {
            // In this block you can do something with new state.
            this.arrayholder = responseJson;
          },
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  GetFlatListItem(name) {
    Alert.alert(name);
  }

  searchData(text) {
    const newData = this.arrayholder.filter((item) => {
      const itemData = item.shop_ID.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      data: newData,
      text: text,
    });
  }

  itemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
        <Text style={styles.headerText}>Order List</Text>
        {/*Starting search bar ///////////////////////////////////*/}
        <View
          style={{
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 20,
            flexDirection: 'row',
            /*justifyContent:'space-between',
                            paddingHorizontal:20,*/
          }}>
          <View
            style={{
              flex: 1,
              height: 50,
              borderRadius: 10,
              flexDirection: 'row',
              backgroundColor: '#add',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <Ionicons name="search" size={28} />
            <TextInput
              onChangeText={(text) => this.searchData(text)}
              value={this.state.text}
              underlineColorAndroid="transparent"
              placeholder="Search Here (Type Shop ID)"
            />
          </View>
        </View>

        {/*Ending search bar ///////////////////////////////////*/}

        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.card}>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Order ID : {item.OrderID}</Text>
                <Text style={styles.cardTitle}>
                  Placed Date : {item.placed_date}
                </Text>
                <Text style={styles.cardTitle}>
                  Bill Value : {item.bill_value}
                </Text>
                <Text style={styles.cardTitle}>User Id: {item.user_id}</Text>
                <Text style={styles.cardTitle}>Shop ID: {item.shop_ID}</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}
export default OrderDetails;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
  },

  productCartOverallView: {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  productCartInlineView: {
    borderWidth: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 100,
    height: 30,
    backgroundColor: '#d1e5d1',
    borderRadius: 60,
    textAlign: 'center',
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  row: {
    fontSize: 18,
    padding: 12,
  },

  textInput: {
    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 8,
    backgroundColor: '#FFFF',
  },

  headerText: {
    color: '#009688',
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },

  card: {
    height: 130,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: 10,
    marginRight: 10,
  },

  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#009387',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },

  formRow: {
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
  },

  addToCart: {
    height: 25,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009387',
    borderRadius: 10,
    marginRight: 0,
  },

  addToCartText: {
    height: 25,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009387',
    borderRadius: 10,
    marginRight: 10,
  },
});
