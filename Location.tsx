import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import * as permissions from 'react-native-permissions';
// you may also import just the functions or constants that you will use from this library
import {request, PERMISSIONS} from 'react-native-permissions';

const requestLocationPermission = async () => {
  try {
    const granted = await permissions.request(
      permissions.PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};

const Location = () => {
  const [location, setLocation] = useState(false);

  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  };

  return (
    <SafeAreaView style={styles.centerShit}>
      <Text style={{marginTop: 40}}>Welcome!</Text>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Get Location" />
      </View>
      <Text>Latitude: {location ? location.coords.latitude : null}</Text>
      <Text>Longitude: {location ? location.coords.longitude : null}</Text>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Send Location" onPress={getLocation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centerShit: {
    display: 'flex',
    alignItems: 'center',
  },
});

export {Location};
