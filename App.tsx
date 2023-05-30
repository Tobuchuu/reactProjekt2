import * as React from 'react';
import {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Geolocation from 'react-native-geolocation-service';

import {Dates} from './Dates';
import {MenuItems} from './MenuItems';
import {Location} from './Location';

const GetLocation = (): JSX.Element => {
  var apiKey = 'AIzaSyBx_aIG8B0tWvcL9F6qnYgN_Hi7KaLhcHY';
  var link = `https://maps.googleapis.com/maps/api/geocode/json?place_id=ChIJeRpOeF67j4AR9ydy_PIzPuM&key=${apiKey}`;
  const [data, setData] = useState('');

  useEffect(() => {
    fetch(link)
      .then(response => response.json())
      .then(json =>
        setData(
          JSON.stringify(json.results[0].address_components[1].short_name),
        ),
      );
  }, []);

  // console.log(data);

  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
};

const HomeScreen = ({navigation}): JSX.Element => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={[styles.dateContainer, styles.shadow]}>
        <Dates />
        <Location />
      </View>
      <View style={styles.menuContainer}>
        {[
          'Weather',
          'Dice',
          'To-Do',
          'News',
          'Currency Converter',
          'Programming Cheatsheet',
        ].map(x => (
          <MenuItems name={x} nav={navigation} />
        ))}
      </View>
    </SafeAreaView>
  );
};

const Weather = ({navigation}): JSX.Element => {
  return (
    <SafeAreaView style={styles.centerShit}>
      <Text>
        {'\n'}IT'S RAINING WALLA{'\n'}
      </Text>

      <TouchableOpacity
        style={styles.goBackBtn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.centerText}>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Dice = ({navigation}): JSX.Element => {
  return (
    <SafeAreaView style={styles.centerShit}>
      <Text>DICE MOMENT</Text>

      <TouchableOpacity
        style={styles.goBackBtn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.centerText}>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const To_Do = ({navigation}): JSX.Element => {
  return (
    <SafeAreaView style={styles.centerShit}>
      <Text>WHAT THE DOG DOIN</Text>

      <TouchableOpacity
        style={styles.goBackBtn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.centerText}>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const News = ({navigation}): JSX.Element => {
  return (
    <SafeAreaView style={styles.centerShit}>
      <Text>BREAKING NEWS</Text>

      <TouchableOpacity
        style={styles.goBackBtn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.centerText}>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Currency = ({navigation}): JSX.Element => {
  return (
    <SafeAreaView style={styles.centerShit}>
      <Text>MOOOOONEEEEY</Text>

      <TouchableOpacity
        style={styles.goBackBtn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.centerText}>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const ProgramCheat = ({navigation}): JSX.Element => {
  return (
    <SafeAreaView style={styles.centerShit}>
      <Text>BEEP BOOP CHEAT</Text>

      <TouchableOpacity
        style={styles.goBackBtn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.centerText}>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    display: 'flex',
    // justifyContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: '5%',
  },
  centerText: {
    textAlign: 'center',
  },
  goBackBtn: {
    backgroundColor: 'red',
    height: 30,
    width: 90,
    justifyContent: 'center',
    borderRadius: 5,
  },
  centerShit: {
    display: 'flex',
    alignItems: 'center',
  },
  mainContainer: {
    // height: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    margin: '6%',
  },
  dateContainer: {
    flex: 1,
    width: '100%',
    flexGrow: 1,
    backgroundColor: 'hsl(193, 27%, 50%)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: '5%',
    marginBottom: '5%',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Weather"
          component={Weather}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dice"
          component={Dice}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="To-Do"
          component={To_Do}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="News"
          component={News}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Currency Converter"
          component={Currency}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Programming Cheatsheet"
          component={ProgramCheat}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
