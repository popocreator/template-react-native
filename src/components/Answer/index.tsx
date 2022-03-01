import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type Props = {};

const Answer = (props: Props) => {
  const [numbers, setNumbers] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ]);
  return (
    <View style={styles.container}>
      {numbers.map(number => (
        <TouchableOpacity style={[styles.card, styles.shadow]}>
          <Text>{number}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={[styles.card, styles.shadow]}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Answer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 6,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    width: '20%',
  },
  shadow: {
    shadowColor: '#545a73',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
});
