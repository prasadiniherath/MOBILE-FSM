import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailsScreen = ({navigation}) => {
  return (
    /*Starting all */
    <ScrollView style={styles.container}>
      {/*Starting Swiper Slide images////////////////////////////////////////////////*/}

      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          height={100}
          activeDotColor="#009387"
          autoplayTimeout={2}>
          <View style={styles.slide}>
            <Image
              source={require('../Screens/banner/SwiperImage3.png')}
              resizeMode="cover"
              style={styles.slideImage}
            />
          </View>

          <View style={styles.slide}>
            <Image
              source={require('../Screens/banner/SwiperImage2.jpg')}
              resizeMode="cover"
              style={styles.slideImage}
            />
          </View>

          <View style={styles.slide}>
            <Image
              source={require('../Screens/banner/SwiperImage1.jpg')}
              resizeMode="cover"
              style={styles.slideImage}
            />
          </View>
        </Swiper>
      </View>

      {/*Ending Swiper Slide images////////////////////////////////////////////////*/}

      {/*starting button icon bars//////////////////////////////////////*/}

      {/* Starting First Row of  button icon bars ///////////////////////*/}

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate('OrderDetails')}>
          <View style={styles.categoryIcon}>
            <Ionicons
              name="information-circle-outline"
              size={35}
              color="#009387"
            />
          </View>
          <Text style={styles.categoryBtnText}>Order Details</Text>
        </TouchableOpacity>

        {/*Starting Make Order navigation */}
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate('Category', {title: 'Category'})}>
          <View style={styles.categoryIcon}>
            <Ionicons name="md-add" size={35} color="#009387" />
          </View>
          <Text style={styles.categoryBtnText}>Make Order</Text>
        </TouchableOpacity>
        {/*Ending Make Order navigation */}

        {/* <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate('Place An Order')}>
          <View style={styles.categoryIcon}>
            <Ionicons name="md-add" size={35} color="#009387" />
          </View>
          <Text style={styles.categoryBtnText}>Make Order2</Text>
        </TouchableOpacity>*/}
      </View>

      {/*Ending First Row ///////////////////////////*/}

      {/*Starting Second Row ///////////////////////////*/}

      {/*<View style={[styles.categoryContainer, {marginTop: 10}]}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate('Return Details')}>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-home" size={35} color="#009387" />
          </View>
          <Text style={styles.categoryBtnText}>Return Details</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate('Discount Details')}>
          <View style={styles.categoryIcon}>
            <Ionicons name="ios-home" size={35} color="#009387" />
          </View>
          <Text style={styles.categoryBtnText}>Discount Details</Text>
        </TouchableOpacity>
      </View>*/}

      {/*Ending Second Row //////////////////////////////*/}
    </ScrollView> /*Ending all ///////////////////////////////////////*/
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  sliderContainer: {
    height: 200,
    width: '95%',
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 18,
  },

  slideImage: {
    height: '190%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 18,
  },

  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10,
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
    width: 70,
    height: 70,
    backgroundColor: '#d1e5d1',
    borderRadius: 50,
  },

  categoryBtnText: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#065f05',
  },
  cardsWrapper: {
    marginTop: 0,
    width: '90%',
    alignSelf: 'center',
  },

  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  cardImageWrapper: {
    flex: 1,
  },

  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  carInfo: {
    flex: 2,
    padding: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },

  cardTitle: {
    fontWeight: 'bold',
  },

  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
