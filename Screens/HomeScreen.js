

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
// import { render } from 'react-dom';
// import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class HomeScreen extends Component {



   
  constructor(props) {
    super(props);
    this.state = { Check_IN: 'Check_IN', Check_Out: 'CheckOut' };
  }
  

  InsertRecord = () => {
    var Check_IN = this.state.Check_IN;
    

    // if (Check_IN.length == 0 && Check_Out.length == 0) {
    //   alert("Required field is missing");
    // }
    // else {
      var InserAPIURL = "http://104.236.38.247:8000/api/attendancecheckin/1";
      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application.json'
      };

      var Data = {
        Check_IN: Check_IN,
         
      };

      fetch(InserAPIURL,
        {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(Data)
        }
      )

        .then((response) => response.json())
        .then((response) => {
          alert(response[0].Message);
        }
        )
        .catch((error) => {
          alert("Check_In updated " );
        }
        )
    }
    
    //checkout
    InsertRecordB = () => {
      
      var Check_Out = this.state.Check_Out;
  
      // if (Check_IN.length == 0 && Check_Out.length == 0) {
      //   alert("Required field is missing");
      // }
      // else {
        var InserAPIURL = "http://104.236.38.247:8000/api/attendancecheckout/1";
        var headers = {
          'Accept': 'application/json',
          'Content-Type': 'application.json'
        };
  
        var Data = {
           
          Check_Out: Check_Out
        };
  
        fetch(InserAPIURL,
          {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(Data)
          }
        )
  
          .then((response) => response.json())
          .then((response) => {
            alert(response[0].Message);
          }
          )
          .catch((error) => {
            alert("Check_Out updated ");
          }
          )
      }
      

  render() {
    const {navigation} = this.props;

    




    return (


      <View style={styles.container}>
      
 
        <ScrollView style={styles.container}>
      <StatusBar />

      <View style={styles.categoryCon}>
 <TouchableOpacity onPress={this.InsertRecord} style={styles.buttonContainer}>
          <Text style={styles.fon}>Check-In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.InsertRecordB} style={styles.buttonContainer}>
          <Text style={styles.fon}>Check-Out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('Profile', { title: 'Restaurant' })
          }>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-person" size={45} color="#000000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('Notifications', { title: 'Fastfood Center' })
          }>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-cart" size={45} color="#000000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Order</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('Explore')}>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-star" size={45} color="#000000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Shop</Text>
        </TouchableOpacity>

      </View>
      <View style={[styles.categoryContainer, { marginTop: 10 }]}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('Report')}>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-create" size={45} color="#000000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('Route')}>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-car" size={45} color="#000000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Route</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-cog" size={45} color="#000000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Setting</Text>
        </TouchableOpacity>
        
      </View> 




    </ScrollView>
      </View>
      

    );

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#FFA62F',
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#2B3856',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  categoryCon: {
    flexDirection: 'column',
    width: '70%',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom:20,
    

  },

  fon: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
});
