import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import RouteDetails from './RouteDetails';
import ReportScreen from './ReportScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ReportStack = createStackNavigator();
const RouteStack = createStackNavigator();
const ExploreStack  = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#2B3856',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />

<Tab.Screen
        name="Route"
        component={RouteStackScreen}
        options={{
          tabBarLabel: 'Route',
          tabBarColor: '#566D7E',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-car" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Order',
          tabBarColor: '#368BC1',
          tabBarIcon: ({ color }) => (
            <Icon name="md-cart" color={color} size={26} />
          ),
        }}
      />
     
      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Shop',
          tabBarColor: '#15317E',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-beaker" color={color} size={26} />
          ),
        }}
      />

<Tab.Screen
        name="Report"
        component={ReportStackScreen}
        options={{
          tabBarLabel: 'Report',
          tabBarColor: '#151B54',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-create" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#2B3856',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Home',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#2B3856" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

const RouteStackScreen = ({navigation}) => (
<RouteStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#566D7E',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <RouteStack.Screen name="Route" component={RouteDetails} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#566D7E" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</RouteStack.Navigator>
);


const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#368BC1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <DetailsStack.Screen name=" Order" component={DetailsScreen} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#368BC1" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </DetailsStack.Navigator>
  );


  const ReportStackScreen = ({navigation}) => (
    <ReportStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#151B54',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <ReportStack.Screen name="Report" component={ReportScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#151B54" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </ReportStack.Navigator>
    );

    const ExploreStackScreen = ({navigation}) => (
      <ExploreStack.Navigator screenOptions={{
              headerStyle: {
              backgroundColor: '#15317E',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold'
              }
          }}>
              <ExploreStack.Screen name="Shop" component={ExploreScreen} options={{
              headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25} backgroundColor="#15317E" onPress={() => navigation.openDrawer()}></Icon.Button>
              )
              }} />
              
      </ExploreStack.Navigator>
      );

    


 
  