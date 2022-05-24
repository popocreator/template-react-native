import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

type Props = ViewProps & {
  area: number;
  children: any;
};

export default function Area({area, children}: Props) {
  return <View style={s.area}>{children}</View>;
}

const s = StyleSheet.create({
  area: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '33.3333%',
  },
});
