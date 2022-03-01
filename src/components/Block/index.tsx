import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  index: number;
  rowIndex: number;
  colIndex: number;
  type?: 'normal' | 'related' | 'selected' | 'correct' | 'wrong';
  problemNumber: string;
  solutionNumber: string;
  areaWidth: number;
  onSelect: (index: number) => void;
};

const Block = ({
  index,
  rowIndex,
  colIndex,
  type = 'normal',
  problemNumber,
  solutionNumber,
  areaWidth,
  onSelect,
}: Props) => {
  const BLANK = '0';
  const blockSize = Math.floor(areaWidth / 9) - 2;
  const space = 3;

  return (
    <>
      <View
        style={[
          styles.container,
          {
            width: blockSize,
            height: [2, 5].includes(rowIndex) ? blockSize + 2 : blockSize,
          },
          [2, 5].includes(rowIndex) ? styles.bottom : {},
          [2, 5].includes(colIndex) ? styles.right : {},
        ]}>
        <TouchableOpacity
          style={[
            styles.card,
            styles.shadow,
            type === 'related' ? styles.related : {},
            type === 'selected' ? styles.selected : {},
          ]}
          onPress={() => onSelect(index)}>
          <Text
            style={[
              styles.text,
              type === 'related' ? styles.relatedText : {},
              type === 'selected' ? styles.selectedText : {},
              problemNumber !== solutionNumber ? styles.mistakeText : {},
            ]}>
            {problemNumber.replace('.', '')}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Block;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  card: {
    backgroundColor: '#edeff5',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#f2f3f9',
  },
  shadow: {
    shadowColor: '#545a73',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a6b0cc',
  },
  right: {
    borderRightWidth: 2,
    paddingRight: 2,
    borderRightColor: '#c8cee3',
  },
  bottom: {
    borderBottomWidth: 2,
    paddingBottom: 4,
    borderBottomColor: '#c8cee3',
  },
  related: {
    backgroundColor: '#d9ddee',
  },
  relatedText: {},
  selected: {
    borderColor: '#fff',
    borderWidth: 2,
    backgroundColor: '#edeef5',
  },
  selectedText: {
    color: '#545a73',
  },
  mistakeText: {
    color: '#e98783',
  },
});
