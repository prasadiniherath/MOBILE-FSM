

import React, { Component } from 'react';
import {Users,UserContext} from '../Context/context';
import { ActivityIndicator, Alert, FlatList, Text, StyleSheet, View, TextInput ,TouchableHighlight,Button, SafeAreaView, ScrollView} from 'react-native';

export default class ExploreScreen extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isLoading: true,
      text: '',
      data: []
    }

    this.arrayholder = [];
  }

  componentDidMount() {

    return fetch('http://104.236.38.247:8000/api/viewshops/'+this.context.loginuserid)
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        this.setState({
          isLoading: false,
          data: responseJson,
        }, () => {
          // In this block you can do something with new state.
          this.arrayholder = responseJson;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  GetFlatListItem(name) {
    Alert.alert(name);
  }

  searchData(text) {
    const newData = this.arrayholder.filter(item => {
      const itemData = item.shop_name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1


    });

    this.setState({
      data: newData,
      text: text
      })
    }

    itemSeparator = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
      );
    }

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
        <TouchableHighlight
       onPress={() => this.props.navigation.navigate('ReturnDetails')}
                style ={{
                    height: 40,
                    width:160,
                    borderRadius:20,
                    backgroundColor : "#151B54",
                    marginLeft :250,
                    marginRight:50,
                    marginTop :20,

                }}>


         <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginTop :10
                  }}>
                  Add Shop
                            </Text>

          </TouchableHighlight>
          <Text
                  style={{
                    color: '#FF0000',
                    marginLeft :20,
                    fontWeight: 'bold',
                    fontSize: 20,
                    marginTop :10
                  }}>
                   Shop List
                            </Text>
        <TextInput
         style={styles.textInput}
         onChangeText={(text) => this.searchData(text)}
         value={this.state.text}
         underlineColorAndroid='transparent'
         placeholder="Search Here" />

<FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>

            <View style={{ backgroundColor: '#ADD8E6', padding: 10, margin: 10 }}>
              <Text style={{ color: '#151B54', fontWeight: 'bold' }}>Shop Name  :{item.shop_name}</Text>
              <Text style={{ color: '#151B54', fontWeight: 'bold' }}>Owner  :{item.owner_name}</Text>
              <Text style={{ color: '#151B54', fontWeight: 'bold' }}>City : {item.city}</Text>
              <TouchableHighlight
       onPress={() => this.props.navigation.navigate('unproductive')}
                style ={{
                    height: 30,
                    width:100,
                    borderRadius:15,
                    backgroundColor : "#151B54",
                    marginTop :10,

                }}>


         <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 10,
                    marginTop :10
                  }}>
                  unproductive
                            </Text>

          </TouchableHighlight>
          <TouchableHighlight
       onPress={() => this.props.navigation.navigate('moreshop')}
                style ={{
                    height: 30,
                    width:100,
                    borderRadius:15,
                    backgroundColor : "#151B54",
                    marginTop :10
                }}>


         <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 10,
                    marginTop :10
                  }}>
                  more shop details
                            </Text>

          </TouchableHighlight>
            </View>

          }

        />

      </View>
    );
  }
}
ExploreScreen.contextType = UserContext;
const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,

  },

  row: {
    fontSize: 18,
    padding: 12
  },

  textInput: {

    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 8,
    backgroundColor: "#FFFF"

  }
});
