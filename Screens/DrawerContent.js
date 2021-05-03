import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//import{ AuthContext } from '../components/context';

export function DrawerContent(props) {

    // const paperTheme = useTheme();

    // const { signOut, toggleTheme } = React.useContext(AuthContext);
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image

                                source={require('./icons/mn.jpg')}

                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@User Name</Caption>
                            </View>
                        </View>


                    </View>

                    <Drawer.Section style={styles.drawerSection}>

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home"
                                    color={color}
                                    size={size}
                                />
                            )}

                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => { props.navigation.navigate('Profile') }}
                        />



                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bicycle-basket"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Order "
                            onPress={() => { props.navigation.navigate('Notifications') }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="android-messages"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Report"
                            onPress={() => { props.navigation.navigate('Report') }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bank"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Shop"
                            onPress={() => { props.navigation.navigate('Explore') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="android-messages"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Route Details"
                            onPress={() => { props.navigation.navigate('RouteDetails') }}
                        />

                        {/* <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="alpha-x-box"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Return Details"
                            onPress={() => { props.navigation.navigate('ReturnDetails') }}
                        /> */}

                        {/* <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="alpha-x-box"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="unproductive"
                            onPress={() => { props.navigation.navigate('unproductive') }}
                        /> */}

                        {/* <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="alpha-x-box"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="moreshop"
                            onPress={() => { props.navigation.navigate('moreshop') }}  
                        /> */}
 
                        {/* <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="alpha-x-box"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Category"
                            onPress={() => { props.navigation.navigate('Category') }} 
                        /> */}
                         {/* <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="alpha-x-box"
                                    color={color}
                                    size={size}
                                />
                            )}
                             label=""
                            onPress={() => { props.navigation.navigate('cart') }} 
                        /> */}
                       
 
                    </Drawer.Section>
                    




                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>


                    <Drawer.Section style={styles.bottomDrawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="exit-to-app"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Sign Out"
                            onPress={() => { }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        backgroundColor: '#98AFC7',
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
        // color:'#98AFC7',

    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },

    fon: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
    },
});
