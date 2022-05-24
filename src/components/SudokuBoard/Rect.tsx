import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from '../../uis';

type Props = {
  col: number;
  row: number;
  area: number;
  value: number | string;
  ri: number;
  onActive: ({
    ri,
    area,
    row,
    col,
  }: {
    ri: number;
    area: number;
    row: number;
    col: number;
  }) => void;
  mode: string;
  isAnswer: boolean;
};

export default function Rect({
  col,
  row,
  area,
  ri,
  value,
  onActive,
  mode,
  isAnswer,
}: Props) {
  const [height, setHeight] = useState<number>(30);
  const NORMAL = 'normal';
  const ACTIVE = 'active';
  const AREA = 'area';
  const ROW_COL = 'row_col';

  return (
    <View
      style={[
        s.rect,
        {height},
        NORMAL === mode && {},
        ACTIVE === mode && {},
        AREA === mode && {},
        ROW_COL === mode && {},
      ]}
      onLayout={e => {
        setHeight(e.nativeEvent.layout.width);
      }}>
      <TouchableOpacity
        style={[
          s.inner,
          NORMAL === mode && {
            backgroundColor: '#fff',
          },
          ROW_COL === mode && {
            backgroundColor: '#eee',
          },
          AREA === mode && {
            backgroundColor: '#ddd',
          },
          ACTIVE === mode && {
            backgroundColor: '#aaf38d',
          },
        ]}
        onPress={() => {
          onActive({row, col, area, ri});
        }}>
        <Text
          style={[
            s.number,
            // NORMAL === mode && {color: 'black'},
            // ROW_COL === mode && {color: 'aqua'},
            // AREA === mode && {color: 'blue'},
            // ACTIVE === mode && {color: 'red'},
            isAnswer && {color: 'black'},
          ]}>
          {value === 0 ? '' : value}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  rect: {
    width: '33.333333333333333333333333%',
    padding: 2,
  },
  inner: {
    height: '100%',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    textAlign: 'center',
    color: 'red',
  },
});
