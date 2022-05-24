import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

type Props = ViewProps & {
  children: any;
};

export default function Board({children}: Props) {
  return <View style={s.board}>{children}</View>;
}

const s = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // flexDirection: 'column',
    // alignItems: 'center',
    padding: 2,
    borderWidth: 1,
    borderColor: 'pink',
    // backgroundColor: 'red',
  },
});
