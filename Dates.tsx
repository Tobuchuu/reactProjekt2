import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function capitalFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Dates = (): JSX.Element => {
  const [now, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000 * 1);

    return () => clearInterval(interval);
  }, []);

  let dateInfo = now
    .toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .split(' ');
  let displayWeekday = capitalFirst(dateInfo[0]);
  let displayDate =
    dateInfo[1] + ' ' + capitalFirst(dateInfo[2]) + ' ' + dateInfo[3];
  let displayTime = now.toTimeString().slice(0, 5);

  return (
    <View>
      <Text id="weekday" style={styles.centerText}>
        {displayWeekday}
      </Text>
      <Text id="date" style={styles.centerText}>
        {displayDate}
      </Text>
      <Text id="time" style={styles.centerText}>
        {displayTime}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centerText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
  },
});

export {Dates};
