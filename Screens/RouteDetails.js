

import getDirections from 'react-native-google-maps-directions';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import React, {useState, useRef, Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
  Button,
  TouchableHighlight,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {Users,UserContext} from '../Context/context';

export default class RouteDetails extends Component {
  state = {
    arr: [],
    data: {
      source: {
        latitude: null,
        longitude: null,
      },
      destination: {
        latitude: null,
        longitude: null,
      },
      params: [
        {
          key: 'travelmode',
          value: 'driving', // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: 'dir_action',
          value: 'navigate', // this instantly initializes navigation using the given travel mode
        },
      ],
      waypoints: [],
    },
  };

  componentDidMount() {
    axios
      .get('http://104.236.38.247:8000/api/routeview/'+this.context.loginuserid)
      .then((res) => {
        let count = Object.keys(res.data).length;
        for (let i = 0; i < count; i++) {
          this.setState((cur) => ({
            arr: [...cur.arr, res.data[i]],
          }));
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  handleGetDirections = (j) => {
    console.log(j);
    axios
      .get(`http://104.236.38.247:8000/api/routewaypoints/${j}`)
      .then((res) => {
        this.setState((cur) => ({
          ...cur,
          data: {
            ...cur.data,
            source: {
              latitude: res.data.details[0].start_lat,
              longitude: res.data.details[0].start_lng,
            },
            destination: {
              latitude: res.data.details[0].end_lat,
              longitude: res.data.details[0].end_lng,
            },
          },
        }));
        for (let i = 0; i < res.data.waypoints.length; i++) {
          this.setState((cur) => ({
            ...cur,
            data: {
              ...cur.data,
              waypoints: [
                ...cur.data.waypoints,
                {
                  latitude: res.data.waypoints[i].lat,
                  longitude: res.data.waypoints[i].lng,
                },
              ],
            },
          }));
        }
        console.log(this.state.data);
        getDirections(this.state.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };




  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {/* <Text  style={{
                  color: 'green',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 35,
                }}>MY ROUTES</Text> */}
          {this.state.arr.map((item, i) => {
            return (
              <View key={i} style={styles.container1}>
                <Text
                  style={{
                    color: 'blue',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 25,
                  }}>
                  {item.route_name}{' '}
                </Text>
                <Text> </Text>
                <Button
                  key={i}
                  onPress={() =>
                    this.setState((cur) => ({
                      ...cur,
                      data: {
                        source: {
                          latitude: null,
                          longitude: null,
                        },
                        destination: {
                          latitude: null,
                          longitude: null,
                        },
                        params: [
                          {
                            key: 'travelmode',
                            value: 'driving', // may be "walking", "bicycling" or "transit" as well
                          },
                          {
                            key: 'dir_action',
                            value: 'navigate', // this instantly initializes navigation using the given travel mode
                          },
                        ],
                        waypoints: [],
                      },
                    })) + this.handleGetDirections(item.RouteID)
                  }
                  title="Get Directions"
                />
              </View>
            );
          })}
        </View>

      </ScrollView>

    );
  }
}
RouteDetails.contextType = UserContext;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#FFFFFF',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
