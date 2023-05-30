import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

type menuVal = {
  name: string;
  nav: any;
};

const MenuItems = (props: menuVal): JSX.Element => {
  return (
    <TouchableOpacity
      style={[styles.menuItem, styles.shadow]}
      onPress={() => props.nav.navigate(props.name)}>
      <Text style={styles.centerText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  centerText: {
    textAlign: 'center',
    color: 'white',
  },
  menuItem: {
    display: 'flex',
    width: 100,
    height: 100,
    backgroundColor: 'hsl(48, 27%, 50%)',
    marginBottom: '5%',
    borderRadius: 5,
    justifyContent: 'center',
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

export {MenuItems};
