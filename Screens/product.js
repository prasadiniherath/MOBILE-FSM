import React, {Component} from 'react';

import {
  ActivityIndicator,
  Alert,
  FlatList,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  SafeAreaView,
  ScrollView,
  AppRegistry,
  Button,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {cart, CartContext} from '../Context/context';

export default class product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      text: '',
      data: [],
    };

    this.arrayholder = [];
  }

  /*Starting */
  componentDidMount() {
    return fetch('http://104.236.38.247:8000/api/viewcategoryproducts/1')
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

  /*Ending */
  searchData(text) {
    const newData = this.arrayholder.filter((item) => {
      const itemData = item.product_Name.toUpperCase();
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

  qtyChangeFunction = (index2, qty) => {
    const newArray = this.state.data.map((elemet, index) => {
      if (index == index2) {
        return {...elemet, qty};
      }
      return elemet;
    });

    this.setState((cur) => ({
      ...cur,
      data: newArray,
    }));
  };

  /*addButtonOnClickHandler*/
  addButtonOnClickHandler(productName, qty, salesPrice, productId) {
    if (qty && !isNaN(qty)) {
      cart.products.push({
        productName,
        productQuantity: qty,
        salesPrice,
        productId,
      });

      cart.totalAmaount = this.context.products
        .map((product) => product.productQuantity * product.salesPrice)
        .reduce((a, b) => a + b, 0);
      Alert.alert('Alert Title', 'Product has sucessfully added to the cart.', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      Alert.alert('Alert Title', 'Please add qty', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  }
  /*addButtonOnClickHandler*/

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
        <View style={styles.productCartOverallView}>
          <View style={styles.productCartInlineView}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Category')}>
              <Ionicons name="cog" size={30} color="#009387" />
            </TouchableOpacity>
          </View>

          <View style={styles.productCartInlineView}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('product', {title: 'Product'})
              }>
              <Ionicons name="pricetags" size={30} color="#009387" />
            </TouchableOpacity>
          </View>

          <View style={styles.productCartInlineView}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Cart', {title: 'Cart'})
              }>
              <Ionicons name="cart" size={30} color="#009387" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.headerText}>Product List</Text>

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
              placeholder="Search Here (Type product name)"
            />
          </View>
        </View>

        {/*Ending search bar ///////////////////////////////////*/}

        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={styles.card}>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>
                  Product Name : {item.product_Name}
                </Text>

                <Text style={styles.cardTitle}>
                  Sales Price : {item.sales_price}
                </Text>

                <Text style={styles.cardTitle}>
                  Labeled Price : {item.labled_price}
                </Text>

                <Text style={styles.cardTitle}>Weight: {item.weight}</Text>

                <View style={styles.formRow}>
                  <TextInput
                    style={styles.textInput}
                    keyboardType="numeric"
                    placeholder="Enter Quantity"
                    placeholderTextColor="#333"
                    value={item.qty ? item.qty : 0}
                    onChangeText={(text) => this.qtyChangeFunction(index, text)}
                  />

                  <View style={styles.buttonContainer}>
                    <Button
                      onPress={() =>
                        this.addButtonOnClickHandler(
                          item.product_Name,
                          item.qty,
                          item.sales_price,
                          item.productID,
                        )
                      }
                      title="ADD to cart"
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

product.contextType = CartContext;

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
    height: 180,
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
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009387',
    borderRadius: 10,
    marginLeft: '70%',
  },

  addToCartText: {
    height: 25,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009387',
    borderRadius: 10,
    marginRight: 10,
  },

  buttonContainer: {
    margin: 20,
  },
  multiButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
