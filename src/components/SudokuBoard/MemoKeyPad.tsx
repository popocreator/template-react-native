import React, {useState} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import Key from './Key';

type Props = ViewProps & {
  memo: number[];
  onMemo: (value: number) => void;
};

export default function MemoKeyPad({memo, onMemo}: Props) {
  return (
    <View style={s.keypad}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((value, i) => (
        <Key key={i} value={value} onPress={onMemo} />
      ))}
    </View>
  );
}

const s = StyleSheet.create({
  keypad: {
    flexDirection: 'row',
  },
});
