// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const ReportScreen = ({navigation}) => {
//     return (
//       <View style={styles.container}>
//         <Text>ReportScreen</Text>
//         <Button
//             title="Go to details screen...again"
//             onPress={() => navigation.push("Details")}
//         />
//         <Button
//             title="Go to home"
//             onPress={() => navigation.navigate("Home")}
//         />
//         <Button
//             title="Go back"
//             onPress={() => navigation.goBack()}
//         />
//       </View>
//     );
// };


// export default ReportScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });


// import React, { Component } from "react";
// // import {useState, useEffect} from "react";

// import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
// // import { render } from 'react-dom';
// import DatePicker from 'react-native-datepicker'

// export default class ReportScreen extends Component {




//   constructor(props) {
//     super(props);
//     this.state = { shop_name: '', owner_name: '', owner_NIC: '', lat: '', lng: '', image: '', address_no: '', suburb: '', city: '', province: '', country: '', registered_date: 'null', due_dates: '', user_id: '' };
//   }


//   InsertRecord = () => {
//     var shop_name = this.state.shop_name;
//     var owner_name = this.state.owner_name;
//     var owner_NIC = this.state.owner_NIC;
//     var lat = this.state.lat;
//     var lng = this.state.lng;
//     var image = this.state.image;
//     var address_no = this.state.address_no;
//     var suburb = this.state.suburb;
//     var city = this.state.city;
//     var province = this.state.province;
//     var country = this.state.country;
//     var registered_date = this.state.registered_date;
//     var due_dates = this.state.due_dates;
//     var user_id = this.state.user_id;


//     // if (Check_IN.length == 0 && Check_Out.length == 0) {
//     //   alert("Required field is missing");
//     // }
//     // else {
//     var InserAPIURL = "http://10.0.2.2:80/api/insertshop.php";
//     var headers = {
//       'Accept': 'application/json',
//       'Content-Type': 'application.json'
//     };

//     var Data = {
//       shop_name: shop_name,
//       owner_name: owner_name,
//       owner_NIC: owner_NIC,
//       lat: lat,
//       lng: lng,
//       image: image,
//       address_no: address_no,
//       suburb: suburb,
//       city: city,
//       province: province,
//       country: country,
//       registered_date: registered_date,
//       due_dates: due_dates,
//       user_id: user_id,

//     };

//     fetch(InserAPIURL,
//       {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify(Data)
//       }
//     )

//       .then((response) => response.json())
//       .then((response) => {
//         alert(response[0].Message);
//       }
//       )
//       .catch((error) => {
//         alert("Check_In updated " + error);
//       }
//       )
//   }

//   //checkout


//   render() {

//     // const [currentDate, setCurrentDate] = useState('');

//     // useEffect(() => {
//     //   var date = new Date().getDate(); //Current Date
//     //   var month = new Date().getMonth() + 1; //Current Month
//     //   var year = new Date().getFullYear(); //Current Year
//     //   var hours = new Date().getHours(); //Current Hours
//     //   var min = new Date().getMinutes(); //Current Minutes
//     //   var sec = new Date().getSeconds(); //Current Seconds
//     //   setCurrentDate(
//     //     date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
//     //   );
//     // }, []);


//     return (

//       <SafeAreaView style={styles.container}>
//         <ScrollView style={styles.scrollView}>
//           <View style={styles.formWrapper}>

//             <Text style={styles.welcomeText}>Shop Details</Text>
//             <View style={styles.formRow}>


//               <TextInput
//                 placeholder={"Shop Name"}

//                 style={styles.textInput}
//                 onChangeText={shop_name => this.setState({ shop_name })}


//               />
//             </View>
//             <View style={styles.formRow}>
//               <TextInput
//                 placeholder={"Owner's Name"}

//                 style={styles.textInput}
//                 onChangeText={owner_name => this.setState({ owner_name })}

//               />
//             </View>

//             <View style={styles.formRow}>
//               <TextInput
//                 placeholder={"Owner's NIC"}

//                 style={styles.textInput}
//                 onChangeText={owner_NIC => this.setState({ owner_NIC })}

//               />

//             </View>
//             {/* <View style={styles.formRow}>
//               <TextInput
//                 placeholder={"Lat"}

//                 style={styles.textInput}
//                 onChangeText={lat => this.setState({ lat })}

//               />
//             </View> */}
//             {/* <View style={styles.formRow}>
//               <TextInput
//                 placeholder={"Lng"}

//                 style={styles.textInput}
//                 onChangeText={lng => this.setState({ lng })}

//               />
//             </View> */}
//             {/* <View style={styles.formRow}>
//               <TextInput
//                 placeholder={"Image"}

//                 style={styles.textInput}
//                 onChangeText={image => this.setState({ image })}

//               />
//             </View> */}
//             <View style={styles.formRow}>
//               <TextInput
//                 placeholder={"Adress No"}

//                 style={styles.textInput}
//                 onChangeText={address_no => this.setState({ address_no })}

//               />
//             </View>

//             <View style={styles.formRow}>
//               <TextInput
//                 placeholder={"Suburb"}

//                 style={styles.textInput}
//                 onChangeText={suburb => this.setState({ suburb })}

//               />

//             </View>

//             <View style={styles.formRow}>
//               <TextInput
//                 placeholder={"City"}

//                 style={styles.textInput}
//                 onChangeText={city => this.setState({ city })}
//               />
//             </View>
//             <View style={styles.formRow}>
//               <TextInput
//                 placeholder={"Province"}

//                 style={styles.textInput}
//                 onChangeText={province => this.setState({ province })}
//               />
//             </View>
//             <View style={styles.formRow}>
//               <TextInput
//                 placeholder={"Country"}

//                 style={styles.textInput}
//                 onChangeText={country => this.setState({ country })}

//               />
//             </View>
//             <Text style={styles.regText}>Register Date</Text>
//              <View style={styles.formRow}>
//              <DatePicker
//         style={{width: '95%'}}
//         // date={this.state.date}
//         mode="date"
//         placeholder="select register date"
//         format="YYYY-MM-DD"
//         minDate="2016-05-01"
//         maxDate="2016-06-01"
//         confirmBtnText="Confirm"
//         cancelBtnText="Cancel"
//         customStyles={{
//           dateIcon: {
//             position: 'absolute',
//             right: 0,
//             top: 4,
//             marginLeft: 0
//           },
//           dateInput: {
//             marginLeft: 36
//           }
//           // ... You can check the source to find the other keys.
//         }}
//         // onDateChange={(date) => {this.setState({date: date})}}
//       />
//             </View> 
//             {/* <View style={styles.formRow}>
//               <TextInput
//                 placeholder={"Due date"}

//                 style={styles.textInput}
//                 onChangeText={due_dates => this.setState({ due_dates })}

//               />
//             </View> */}

//             <View style={styles.formRow}>
//               <TextInput
//                 placeholder={"User ID"}

//                 style={styles.textInput}
//                 onChangeText={user_id => this.setState({ user_id })}

//               />
//             </View>

//             <View>
//               <TouchableOpacity
//                 onPress={this.InsertRecord}
//                 style={{
//                   height: 42,
//                   width: 100,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   alignSelf: 'center',
//                   backgroundColor: '#2B547E',
//                   borderRadius: 20,
//                 }}>
//                 <Text
//                   style={{
//                     color: 'white',
//                     textAlign: 'center',
//                     fontWeight: 'bold',
//                     fontSize: 16,
//                   }}>
//                   Submit
//                             </Text>
//               </TouchableOpacity>
//             </View>



//           </View>
//         </ScrollView>
//       </SafeAreaView>

//     );

//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     marginTop: 10,
//   },

//   scrollView: {

//     marginHorizontal: 1,
//   },
//   formRow: {
//     marginBottom: 10,
//     marginLeft: 13,
//     justifyContent: 'center',
//   },
//   empty: {
//     textAlign: 'center',
//     color: '#808080',
//   },

//   addProductBtn: {
//     backgroundColor: 'blue',
//     paddingVertical: 10,
//   },

//   addProductText: {
//     textAlign: 'center',
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: 'bold',
//   },

//   formRow: {
//     marginBottom: 10,
//   },

//   textInput: {
//     backgroundColor: '#add',
//     height: 40,
//     paddingHorizontal: 10,
//     color: '#808080',
//     borderRadius: 20,
//   },
//   empty: {
//     textAlign: 'center',
//   },

//   addProductBtn: {
//     backgroundColor: 'blue',
//     paddingVertical: 10,
//   },

//   addProductText: {
//     textAlign: 'center',
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: 'bold',
//   },

//   // container:{
//   //     height:"100%",
//   //     alignItems:"center",
//   //     justifyContent:"center"
//   // }

//   formWrapper: {
//     width: '80%',
//     justifyContent: 'center',
//   },

//   formRow: {
//     marginBottom: 10,
//   },

//   textInput: {
//     backgroundColor: '#add',
//     height: 40,
//     paddingHorizontal: 10,
//     color: '#333',
//     borderRadius: 20,
//   },

//   welcomeText: {
//     textAlign: 'center',
//     marginBottom: 20,
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#2B547E',
//   },
//   regText: {
//     textAlign: 'center',
//     marginBottom: 10,
//     fontSize: 14,
//     fontWeight: 'bold',
     
//   },

// });;

//
// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, FlatList, Button,TouchableHighlight, SafeAreaView, ScrollView  } from 'react-native';
// export default class ExploreScreen extends Component<Props> {

//   state = {
//     data: []
//   }

//   fetchData = async () => {
//     const response = await fetch('http://192.168.8.185:1348/shops');
//     const users = await response.json();
//     this.setState({ data: users });

//   }
//   componentDidMount() {
//     this.fetchData();
//   }
//   render() {
//     return (
// <SafeAreaView style={styles.container}>
//         <ScrollView style={styles.scrollView}> 
//       <View >
      
//       <TouchableHighlight 
//        onPress={() => this.props.navigation.navigate('ReturnDetails')} 
//                 style ={{
//                     height: 40,
//                     width:160,
//                     borderRadius:20,
//                     backgroundColor : "#151B54",
//                     marginLeft :250,
//                     marginRight:50,
//                     marginTop :20
//                 }}>
         
          
//          <Text
//                   style={{
//                     color: 'white',
//                     textAlign: 'center',
//                     fontWeight: 'bold',
//                     fontSize: 16,
//                     marginTop :10
//                   }}>
//                   Add Shop
//                             </Text>
         
//           </TouchableHighlight>
//           <Text
//                   style={{
//                     color: '#FF0000',
//                     marginLeft :20,
//                     fontWeight: 'bold',
//                     fontSize: 20,
//                     marginTop :10
//                   }}>
//                    Shop List
//                             </Text>
//         <FlatList
//           data={this.state.data}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item }) =>

//             <View style={{ backgroundColor: '#ADD8E6', padding: 10, margin: 10 }}>
//               <Text style={{ color: '#151B54', fontWeight: 'bold' }}>Shop Name  :{item.shop_name}</Text>
//               <Text style={{ color: '#151B54', fontWeight: 'bold' }}>Owner  :{item.owner_name}</Text>
//               <Text style={{ color: '#151B54', fontWeight: 'bold' }}>City : {item.city}</Text>
//             </View>

//           }

//         />
//       </View>
//       </ScrollView>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
    
//   },
  
// });

import React, { Component } from 'react';

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

    return fetch('http://104.236.38.247:8000/api/viewshops/1')
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
 