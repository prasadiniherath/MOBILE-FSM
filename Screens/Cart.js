import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import {cart, CartContext} from '../Context/context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const initialState = {
  tableHead: [
    'Item No',
    'Item Name',
    'Quantity',
    'Sales Price',
    'Increase',
    'Decrease',
    'Remove',
  ],
  tableData: [],
  totalAmount: 0,
  discount: 0,
  grandTotal: 0,
  userId: '',
  shopId: '',
};
export default class Cart extends Component {
  /*Starting - using table*/
  state = initialState;

  // Starting removeProductFromCart
  removeProductFromCart(index) {
    cart.totalAmaount =
      parseFloat(cart.totalAmaount) -
      parseFloat(
        cart.products[index].salesPrice * cart.products[index].productQuantity,
      );

    cart.products.splice(index, 1);

    this.setState((cur) => ({
      ...cur,
      tableData: this.context.products,
      totalAmount: this.context.totalAmaount,
      grandTotal:
        parseFloat(this.context.totalAmaount) -
        parseFloat((this.context.totalAmaount * this.state.discount) / 100),
    }));
  }
  // Starting removeProductFromCart

  // Starting increase quantity working
  increaseProductFromCart(index2) {
    const newArray = this.state.tableData.map((elemet, index) => {
      if (index == index2) {
        return {
          ...elemet,
          productQuantity: parseInt(elemet.productQuantity) + 1,
        };
      }
      return elemet;
    });

    const totalAmount = newArray
      .map((product) => product.productQuantity * product.salesPrice)
      .reduce((a, b) => a + b, 0);

    this.setState((cur) => ({
      ...cur,
      tableData: newArray,
      totalAmount,
      grandTotal:
        parseFloat(totalAmount) -
        parseFloat((totalAmount * this.state.discount) / 100),
    }));

    cart.totalAmaount = totalAmount;
    cart.products = newArray;
  }
  // Ending increase quantity working

  // Starting decrease quantity working
  decreaseProductFromCart(index2) {
    const newArray = this.state.tableData.map((elemet, index) => {
      if (index == index2) {
        return {
          ...elemet,
          productQuantity:
            parseInt(elemet.productQuantity) - 1 < 1
              ? 1
              : parseInt(elemet.productQuantity) - 1,
        };
      }
      return elemet;
    });

    const totalAmount = newArray
      .map((product) => product.productQuantity * product.salesPrice)
      .reduce((a, b) => a + b, 0);

    console.log(totalAmount);

    this.setState((cur) => ({
      ...cur,
      tableData: newArray,
      totalAmount: totalAmount,
      grandTotal:
        parseFloat(totalAmount) -
        parseFloat((totalAmount * this.state.discount) / 100),
    }));

    cart.totalAmaount = totalAmount;
    cart.products = newArray;
  }

  // Ending decrease quantity working

  componentDidMount() {
    this.setState((cur) => ({
      ...cur,
      tableData: this.context.products,
      totalAmount: this.context.totalAmaount,
      grandTotal: this.context.totalAmaount,
    }));
  }

  discountOnChangeHandler = (discount) => {
    this.setState((cur) => ({
      ...cur,
      discount,
      grandTotal:
        parseFloat(this.state.totalAmount) -
        parseFloat((this.state.totalAmount * discount) / 100),
    }));
  };

  /*  onChangeHandler = ({key, value}) => {
    this.setState((cur) => ({
      ...cur,
      [key]: value,
    }));
  };*/

  userOnChangeHandler = (userid) => {
    this.setState((cur) => ({
      ...cur,
      userId: userid,
    }));
  };

  shopOnChangeHandler = (shopid) => {
    this.setState((cur) => ({
      ...cur,
      shopId: shopid,
    }));
  };

  refreshCart = () => {
    cart.products = [];
    cart.totalAmaount = 0;
    this.setState(initialState);
  };

  /*Starting submit*/

  submitButtonHandler = () => {
    fetch('http://104.236.38.247:8000/api/order', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grandTotal: this.state.grandTotal,
        discount: this.state.discount,
        userId: this.state.userId,
        shopId: this.state.shopId,
        productDetails: [...this.state.tableData],
      }),
    });

    console.log('grandTotal' + this.state.grandTotal);
    console.log('discount' + this.state.discount);
    console.log('userId' + this.state.userId);
    console.log('shopId' + this.state.shopId);
    console.log('productDetails');
    console.log(...this.state.tableData);

    this.refreshCart();
  };

  /*Ending submit*/

  render() {
    const state = this.state;

    const element2 = (index) => (
      <TouchableOpacity onPress={() => this.increaseProductFromCart(index)}>
        <View>
          <Ionicons name="add-circle-outline" size={30} color="#009387" />
        </View>
      </TouchableOpacity>
    );

    const element3 = (index) => (
      <TouchableOpacity onPress={() => this.decreaseProductFromCart(index)}>
        <View>
          <Ionicons name="remove-circle-outline" size={30} color="#009387" />
        </View>
      </TouchableOpacity>
    );

    const element = (data, index) => (
      <TouchableOpacity onPress={() => this.removeProductFromCart(index)}>
        <View>
          <Ionicons name="close-circle-outline" size={30} color="#009387" />
        </View>
      </TouchableOpacity>
    );

    return (
      <ScrollView style={styles.container}>
        {/*Starting main header*/}
        <View style={styles.productCartOverallView}>
          <View style={styles.productCartInlineView}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Category', {title: 'Category'})
              }>
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
        {/*Ending main header*/}

        {/*Stating*/}
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          {this.state.tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              <Cell key={index} data={index + 1} textStyle={styles.text} />
              {Object.values(rowData)
                .filter((element, index) => index != 3)
                .map((cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    data={cellData}
                    textStyle={styles.text}
                  />
                ))}
              <Cell key={5} data={element2(index)} />
              <Cell key={5} data={element3(index)} />
              <Cell key={4} textStyle={styles.text} data={element(1, index)} />
            </TableWrapper>
          ))}
        </Table>

        <View style={styles.textContainer}>
          <Text style={styles.inlineTextContainer}>
            Sub Total : {this.state.totalAmount}
          </Text>
          <TextInput
            placeholder="Discount"
            keyboardType="numeric"
            placeholderTextColor="#333"
            value={this.state.discount.toString()}
            onChangeText={(text) => this.discountOnChangeHandler(text)}
          />
          <Text style={styles.inlineTextContainer}>
            Grand Total(Bill Value) :{this.state.grandTotal}
          </Text>
        </View>

        <View style={styles.formWrapper}>
          <View style={styles.formRow}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter user Id"
              keyboardType="numeric"
              placeholderTextColor="#333"
              value={this.state.userId}
              /*onChangeText={(userId) =>
                this.onChangeHandler({key: 'userId', userId})
              }*/
              onChangeText={(text) => this.userOnChangeHandler(text)}
            />
          </View>

          <View style={styles.formRow}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter shop ID"
              keyboardType="numeric"
              placeholderTextColor="#333"
              value={this.state.shopId}
              /*onChangeText={(shopId) =>
                this.onChangeHandler({key: 'shopId', shopId})
              }*/
              onChangeText={(text) => this.shopOnChangeHandler(text)}
            />
          </View>
        </View>

        {/*  /////////// starting submit button ///////////////////////////////////////////////////////////// */}
        <View>
          <TouchableOpacity
            onPress={() => this.submitButtonHandler()}
            style={styles.orderNowBtn}>
            <Text style={{}}>Order Now</Text>
          </TouchableOpacity>
        </View>

        {/*  /////////// ending submit button ///////////////////////////////////////////////////////////// */}
      </ScrollView>
    );
  }
}

Cart.contextType = CartContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },

  head: {
    height: 40,
    backgroundColor: '#808B97',
  },

  text: {
    margin: 6,
  },

  row: {
    flexDirection: 'row',
    backgroundColor: '#FFF1C1',
  },

  btn: {
    width: 58,
    height: 18,
    backgroundColor: '#78B7BB',
    borderRadius: 2,
  },

  btnText: {
    textAlign: 'center',
    color: '#fff',
  },

  productCartOverallView: {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    marginTop: 0,
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
  buttonContainer: {
    margin: 20,
  },
  multiButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  addToCart: {
    height: 25,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009387',
    borderRadius: 10,
    marginRight: 0,
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

  formWrapper: {
    width: '80%',
    marginTop: 30,
  },

  formRow: {
    marginBottom: 10,
  },

  textInput: {
    backgroundColor: '#add',
    height: 40,
    paddingHorizontal: 10,
    color: '#333',
    borderRadius: 20,
  },

  textContainer: {
    marginTop: 20,
  },

  inlineTextContainer: {
    color: '#333',
    /*fontWeight: 'bold',*/
    fontSize: 15,
    marginTop: 10,
  },

  orderNowBtn: {
    height: 42,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'green',
    borderRadius: 20,
  },

  orderNowText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
