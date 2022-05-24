import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '../../uis';

type Props = {
  value: number;
  onPress: (value: number) => void;
};

export default function Key({value, onPress}: Props) {
  return (
    <TouchableOpacity style={s.key} onPress={() => onPress(value)}>
      <Text>{value === 0 ? 'X' : value}</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  key: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#ddd',
    flex: 1,
    marginHorizontal: 4,
  },
});
