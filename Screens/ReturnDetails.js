
//  // React Native Get Current Date Time
// // https://aboutreact.com/react-native-get-current-date-time/

// // import React in our code
// import React, {useState, useEffect} from 'react';

// // import all the components we are going to use
// import {SafeAreaView, StyleSheet, View, Text,TouchableOpacity} from 'react-native';

// const ReturnDetails = ({navigation}) => {
//   const [currentDate, setCurrentDate] = useState('');

//   useEffect(() => {
//     var date = new Date().getDate(); //Current Date
//     var month = new Date().getMonth() + 1; //Current Month
//     var year = new Date().getFullYear(); //Current Year
//     var hours = new Date().getHours(); //Current Hours
//     var min = new Date().getMinutes(); //Current Minutes
//     var sec = new Date().getSeconds(); //Current Seconds
//     setCurrentDate(
//       date + '/' + month + '/' + year 
//       + '     ' + hours + ':' + min + ':' + sec
//     );
//   }, []);

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <View style={styles.container}>
//           <Text style={styles.textStyle}>

//           </Text>
//           <Text style={styles.textStyle}>
//             {currentDate}
//           </Text>
//         </View>
//         <TouchableOpacity  style = {styles.button} onPress={() => navigation.navigate("Home")}>
//          <Text>Home</Text>
//       </TouchableOpacity>
//         <Text
//           style={{
//             fontSize: 16,
//             textAlign: 'center',
//             color: 'green'
//           }}>
//           Successfully updated
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     padding: 10,
//   },
//   textStyle: {
//     textAlign: 'center',
//     fontSize: 18,
//     color: 'black',
//   },

//   button: {
//     backgroundColor: '#4ba37b',
//     width: 100,
//     borderRadius: 50,
//     alignItems: 'center',
//     marginTop: 100
//  },
// });

// export default ReturnDetails;




// //
// import React, { Component } from "react";
// // import {useState, useEffect} from "react";

// import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
// // import { render } from 'react-dom';
// import DatePicker from 'react-native-datepicker'

// export default class ReturnDetails extends Component {




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
//             {/* <Text style={styles.regText}>Register Date</Text>
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
//             </View>  */}
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




import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  RadioButtonGroup,
  RadioButton,
  SafeAreaView, ScrollView,
  Text
} from "react-native";

import axios from "axios";

class ReturnDetails extends React.Component {
  constructor() {
    super();
    this.state = {
    shop_name: "",
    owner_name: "",
    owner_NIC: "",
    address_no: "",
    suburb: "",
    city: "",
    province: "",
    country: "",
    telephone_numbers: "",
    user_id: "",
    };
  }
  refresh = () => {
    this.setState(this.state);
  };
  
  submit() {
    axios.post("http://104.236.38.247:8000/api/mobileshopadd", {
      shop_name: this.state.shop_name,
      owner_name: this.state.owner_name,
      owner_NIC: this.state.owner_NIC,
      address_no: this.state.address_no,
      suburb: this.state.suburb,
      city: this.state.city,
      province: this.state.province,
      country: this.state.country,
      telephone_numbers: this.state.telephone_numbers,
      user_id: this.state.user_id,
    })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));

    
      this.setState(this.state);
    
  }

  updateValue(text, field) {
    if (field == "shop_name") {
      this.setState({
        shop_name: text,
      });
    } else if (field == "owner_name") {
      this.setState({
        owner_name: text,
      });
    } else if (field == "owner_NIC") {
      this.setState({
        owner_NIC: text,
      });
    } else if (field == "address_no") {
      this.setState({
        address_no: text,
      });
    } else if (field == "suburb") {
      this.setState({
        suburb: text,
      });
    } else if (field == "city") {
      this.setState({
        city: text,
      });
    } else if (field == "province") {
      this.setState({
        province: text,
      });
    } else if (field == "country") {
      this.setState({
        country: text,
      });
    } else if (field == "telephone_numbers") {
      this.setState({
        telephone_numbers: text,
      });
    } else if (field == "user_id") {
      this.setState({
        user_id: text,
      });
    }
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <TextInput
              style={styles.input}
              placeholder="Enter Shop Name"
              onChangeText={(text) => this.updateValue(text, "shop_name")}
          />

          <TextInput
              style={styles.input}
              placeholder="Enter Owner Name"
              onChangeText={(text) => this.updateValue(text, "owner_name")}
          />

          <TextInput
              style={styles.input}
              placeholder="Enter NIC"
              onChangeText={(text) => this.updateValue(text, "owner_NIC")}
          />

          <TextInput
              style={styles.input}
              placeholder="Enter Address No"
              onChangeText={(text) => this.updateValue(text, "address_no")}
          />

          <TextInput
              style={styles.input}
              placeholder="Enter Suburb"
              onChangeText={(text) => this.updateValue(text, "suburb")}
          />

          <TextInput
              style={styles.input}
              placeholder="Enter City"
              onChangeText={(text) => this.updateValue(text, "city")}
          />

          <TextInput
              style={styles.input}
              placeholder="Enter Province"
              onChangeText={(text) => this.updateValue(text, "province")}
          />

          <TextInput
              style={styles.input}
              placeholder="Enter Country"
              onChangeText={(text) => this.updateValue(text, "country")}
          />

          <TextInput
              style={styles.input}
              placeholder="Enter TP"
              onChangeText={(text) => this.updateValue(text, "telephone_numbers")}
          />

          <TextInput
              style={styles.input}
              placeholder="Enter User ID"
              onChangeText={(text) => this.updateValue(text, "user_id")}
          />


          <Button
              title="Submit"
              onPress={() => {
                this.submit();
              }}
          />
        </View>
          </ScrollView>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "skyblue",
    margin: 20,
    marginTop: 20,
  },
  container: {
    margin: 20,
    marginTop: 100,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default ReturnDetails;