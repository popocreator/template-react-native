import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import Key from './Key';

type Props = ViewProps & {
  onChange: (value: number) => void;
};

export default function KeyPad({onChange}: Props) {
  return (
    <View style={s.keypad}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((value, i) => (
        <Key key={i} value={value} onPress={onChange} />
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  keypad: {
    flexDirection: 'row',
  },
});
