// // // import React from 'react';
// // // import { View, Text, Button, Image, StyleSheet, StatusBar, ImageBackground,TouchableOpacity } from 'react-native';
// // // import ImagesExample from './ImagesExample';
// // // import MenuItem from './components/MenuItem';


// // // const HomeScreen = ({ navigation }) => {
// // //   return (
// // //     <ImageBackground
// // //       source={require('./icons/salesman.jpg')}
// // //       style={styles.container}>

// // //       <View style={styles.overlayContainer}>
// // //         <View style={styles.top}>
// // //           <Text style={styles.header}>
// // //             H O M E
// // //              </Text>
// // //         </View>
// // //         <View style={styles.menuContainer}>

// // //             <MenuItem ItemImage={require('./icons/3.png')}/>


// // //           <MenuItem ItemImage={require('./icons/1.png')} />
// // //           <MenuItem ItemImage={require('./icons/2.png')} />
// // //           <MenuItem ItemImage={require('./icons/4.png')} />
// // //           <MenuItem ItemImage={require('./icons/5.png')} />
// // //           <MenuItem ItemImage={require('./icons/6.png')} />


// // //         </View>
// // //       </View>
// // //     </ImageBackground>
// // //   );
// // // };

// // // export default HomeScreen;

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     width: '100%',
// // //     height: '100%',
// // //   },
// // //   overlayContainer: {
// // //     flex: 1,
// // //     backgroundColor: 'rgba(47,163,218, .4)'
// // //   },

// // //   top: {
// // //     height: '50%',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //   },

// // //   header: {
// // //     color: '#fff',
// // //     fontSize: 28,
// // //     borderColor: '#fff',
// // //     borderWidth: 2,
// // //     padding: 20,
// // //     paddingLeft: 40,
// // //     paddingRight: 40,
// // //     backgroundColor: 'rgba(255,255,255, .1)',

// // //   },
// // //   menuContainer: {
// // //     height: '40%',
// // //     flexDirection: 'row',
// // //     flexWrap: 'wrap',
// // //   }

// // // });

// // // import React from 'react';
// // // import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

// // // const Separator = () => (
// // //   <View style={styles.separator} />
// // // );

// // // const HomeScreen = ({navigation}) => (
// // //   <SafeAreaView style={styles.container}>
// // //     <View>

// // //       <Button
// // //         title="CheckIN" 
// // //         onPress={() => navigation.navigate("ReturnDetails")}
// // //       />
// // //     </View>
// // //     <Separator />
// // //     <View>

// // //       <Button
// // //         title="CheckOUT"
// // //         color="#f194ff"
// // //         onPress={() => navigation.navigate("ReturnDetails")}

// // //       />


// // //     </View>
// // //     <Separator />
// // //      </SafeAreaView>
// // // );

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     // flex: 1,
// // //     justifyContent: 'center',
// // //     marginTop: 2,



// // //   },
// // //   title: {
// // //     textAlign: 'auto',
// // //     // marginVertical: 8,
// // //   },
// // //   fixToText: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //   },
// // //   separator: {
// // //     // marginVertical: 8,
// // //     borderBottomColor: '#737373',
// // //     borderBottomWidth: StyleSheet.hairlineWidth,
// // //   },
// // // });

// // // export default HomeScreen;
// // import React from 'react';
// // import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
// // import { useTheme } from '@react-navigation/native';

// // const HomeScreen = ({navigation}) => {

// //   const { colors } = useTheme();

// //   const theme = useTheme();

// //     return (
// //       <View style={styles.container}>
// //         <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
// //         <Text style={{color: colors.text}}>Home Screen</Text>
// //       <Button
// //         title="Go to details screen"
// //         onPress={() => navigation.navigate("Details")}
// //       />
// //       </View>
// //     );
// // };

// // export default HomeScreen;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1, 
// //     alignItems: 'center', 
// //     justifyContent: 'center'
// //   },
// // });


// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   StatusBar,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import { useTheme } from '@react-navigation/native';

// // import Swiper from 'react-native-swiper';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const HomeScreen = ({ navigation }) => { 
//   const theme = useTheme();

//   return (
    // <ScrollView style={styles.container}>
    //   <StatusBar />
    //   {/* <View style={styles.sliderContainer}>
    //     <Swiper
    //       autoplay
    //       horizontal={false}
    //       height={200}
    //       activeDotColor="#FF6347">
    //       <View style={styles.slide}>
    //         <Image
    //           source={require('../assets/banners/food-banner1.jpg')}
    //           resizeMode="cover"
    //           style={styles.sliderImage}
    //         />
    //       </View>
    //       <View style={styles.slide}>
    //         <Image
    //           source={require('../assets/banners/food-banner2.jpg')}
    //           resizeMode="cover"
    //           style={styles.sliderImage}
    //         />
    //       </View>
    //       <View style={styles.slide}>
    //         <Image
    //           source={require('../assets/banners/food-banner3.jpg')}
    //           resizeMode="cover"
    //           style={styles.sliderImage}
    //         />
    //       </View>
    //     </Swiper>
    //   </View> */}
    //   <View style={styles.categoryCon}>
    //     <TouchableOpacity style={styles.buttonContainer}>
    //       <Text style={styles.fon}>Check-In</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.buttonContainer}>
    //       <Text style={styles.fon}>Check-Out</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={styles.categoryContainer}>
    //     <TouchableOpacity
    //       style={styles.categoryBtn}
    //       onPress={() =>
    //         navigation.navigate('Profile', { title: 'Restaurant' })
    //       }>
    //       <View style={styles.categoryIcon}>
    //         <Ionicons name="ios-person" size={35} color="#000000" />
    //       </View>
    //       <Text style={styles.categoryBtnTxt}>Profile</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity
    //       style={styles.categoryBtn}
    //       onPress={() =>
    //         navigation.navigate('Notifications', { title: 'Fastfood Center' })
    //       }>
    //       <View style={styles.categoryIcon}>
    //         <Ionicons name="ios-cart" size={35} color="#000000" />
    //       </View>
    //       <Text style={styles.categoryBtnTxt}>Order</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('Explore')}>
    //       <View style={styles.categoryIcon}>
    //         <Ionicons name="ios-star" size={35} color="#000000" />
    //       </View>
    //       <Text style={styles.categoryBtnTxt}>Shop</Text>
    //     </TouchableOpacity>

    //   </View>
    //   <View style={[styles.categoryContainer, { marginTop: 10 }]}>
    //     <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('Report')}>
    //       <View style={styles.categoryIcon}>
    //         <Ionicons name="ios-create" size={35} color="#000000" />
    //       </View>
    //       <Text style={styles.categoryBtnTxt}>Report</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('RouteDetails')}>
    //       <View style={styles.categoryIcon}>
    //         <Ionicons name="ios-car" size={35} color="#000000" />
    //       </View>
    //       <Text style={styles.categoryBtnTxt}>Routes</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('ReturnDetails')}>
    //       <View style={styles.categoryIcon}>
    //         <Ionicons name="md-arrow-back" size={35} color="#000000" />
    //       </View>
    //       <Text style={styles.categoryBtnTxt}>Returns</Text>
    //     </TouchableOpacity>
    //   </View>

    //   <View style={[styles.categoryContainer, { marginTop: 10 }]}>
    //     <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
    //       <View style={styles.categoryIcon}>
    //         <Ionicons name="ios-notifications" size={35} color="#000000" />
    //       </View>
    //       <Text style={styles.categoryBtnTxt}>Notifications</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
    //       <View style={styles.categoryIcon}>
    //         <Ionicons name="ios-cog" size={35} color="#000000" />
    //       </View>
    //       <Text style={styles.categoryBtnTxt}>Setting</Text>
    //     </TouchableOpacity>



    //     <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('ReturnDetails')}>
    //       <View style={styles.categoryIcon}>
    //         <MaterialIcons name="expand-more" size={35} color="#000000" />
    //       </View>
    //       <Text style={styles.categoryBtnTxt}>Show More</Text>
    //     </TouchableOpacity>
    //   </View>



    // </ScrollView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   categoryContainer: {
//     flexDirection: 'row',
//     width: '90%',
//     alignSelf: 'center',
//     marginTop: 50,
//     marginBottom: 10,
//   },
//   categoryBtn: {
//     flex: 1,
//     width: '30%',
//     marginHorizontal: 0,
//     alignSelf: 'center',
//   },
//   categoryIcon: {
//     borderWidth: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     width: 70,
//     height: 70,
//     backgroundColor: '#FFA62F',
//     borderRadius: 50,
//   },
//   categoryBtnTxt: {
//     alignSelf: 'center',
//     marginTop: 5,
//     color: '#2B3856',
//   },
//   buttonContainer: {
//     marginTop: 10,
//     height: 45,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',

//     width: 250,
//     borderRadius: 30,
//     backgroundColor: "#00BFFF",
//   },
//   categoryCon: {
//     flexDirection: 'column',
//     width: '60%',
//     alignSelf: 'center',
//     marginTop: 20,

//   },

//   fon: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     color: '#fff',
//   },
// });


//import React, { Component } from "react";
// import {useState, useEffect} from "react";

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

    

    // const [currentDate, setCurrentDate] = useState('');

    // useEffect(() => {
    //   var date = new Date().getDate(); //Current Date
    //   var month = new Date().getMonth() + 1; //Current Month
    //   var year = new Date().getFullYear(); //Current Year
    //   var hours = new Date().getHours(); //Current Hours
    //   var min = new Date().getMinutes(); //Current Minutes
    //   var sec = new Date().getSeconds(); //Current Seconds
    //   setCurrentDate(
    //     date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
    //   );
    // }, []);


    return (


      <View style={styles.container}>
      
        {/* <TextInput
          // placeholder={"Check_IN"}
          // placeholderTextColor={"#ff0000"}
          // style={styles.txtStyle}
          onChangeText={Check_IN => this.setState({ Check_IN })}


        />
        <TextInput
          // placeholder={"Check_Out"}
          // placeholderTextColor={"#ff0000"}
          // style={styles.txtStyle}
          onChangeText={Check_Out => this.setState({ Check_Out })}

        /> */}
        {/* <Button
          title={"Check_IN"}
          onPress={this.InsertRecord}
        />
         
        <Button
          title={"Check_Out"}
          onPress={this.InsertRecordB}
        /> */}
        <ScrollView style={styles.container}>
      <StatusBar />
      {/* <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#FF6347">
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/food-banner1.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/food-banner2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/food-banner3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View> */}
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

      {/* <View style={[styles.categoryContainer, { marginTop: 10 }]}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-notifications" size={35} color="#000000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-cog" size={35} color="#000000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Setting</Text>
        </TouchableOpacity>



        <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('ReturnDetails')}>
          <View style={styles.categoryIcon}>
            <MaterialIcons name="expand-more" size={35} color="#000000" />
          </View>
          <Text style={styles.categoryBtnTxt}>Show More</Text>
        </TouchableOpacity>
      </View> */}



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
