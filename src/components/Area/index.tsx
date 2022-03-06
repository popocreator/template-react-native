import React, {useRef, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Block from '../Block';

type Props = {
  problemNumbers: string[];
  solutionNumbers: string[];
  selectedIndex: number;
  onSelect: (i: number) => void;
};

const Area = ({
  problemNumbers,
  solutionNumbers,
  selectedIndex,
  onSelect,
}: Props) => {
  const BLANK = '0';
  const blockIndexArray = useRef([...Array(81).keys()]);
  const areaWidth = Dimensions.get('window').width;

  const rowIndex = (index: number) => Math.floor(index / 9);
  const colIndex = (index: number) => index % 9;
  const areaIndex = (index: number) => {
    const ri = rowIndex(index);
    const areaRow1 = [0, 1, 2].includes(ri);
    const areaRow2 = [3, 4, 5].includes(ri);
    const areaRow3 = [6, 7, 8].includes(ri);

    const ci = colIndex(index);
    const areaCol1 = [0, 1, 2].includes(ci);
    const areaCol2 = [3, 4, 5].includes(ci);
    const areaCol3 = [6, 7, 8].includes(ci);

    if (areaRow1 && areaCol1) return 0;
    else if (areaRow1 && areaCol1) return 0;
    else if (areaRow1 && areaCol2) return 1;
    else if (areaRow1 && areaCol3) return 2;
    else if (areaRow2 && areaCol1) return 3;
    else if (areaRow2 && areaCol2) return 4;
    else if (areaRow2 && areaCol3) return 5;
    else if (areaRow3 && areaCol1) return 6;
    else if (areaRow3 && areaCol2) return 7;
    else if (areaRow3 && areaCol3) return 8;
    else return -1;
  };

  const type = (selectedIndex: number, index: number) => {
    const isSameIndex = selectedIndex === index;

    const isSameRow = rowIndex(selectedIndex) === rowIndex(index);
    const isSameCol = colIndex(selectedIndex) === colIndex(index);
    const isSameArea = areaIndex(selectedIndex) === areaIndex(index);
    const isRelatedBlock = isSameRow || isSameCol || isSameArea;

    if (isSameIndex) {
      return 'selected';
    } else if (isRelatedBlock) {
      return 'related';
    } else {
      return 'normal';
    }
  };

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.container,
          {
            width: areaWidth,
          },
        ]}>
        <View style={[styles.blockList]}>
          {blockIndexArray.current.map(index => (
            <Block
              key={index}
              index={index}
              rowIndex={rowIndex(index)}
              colIndex={colIndex(index)}
              type={type(selectedIndex, index)}
              problemNumber={problemNumbers[index] || BLANK}
              solutionNumber={solutionNumbers[index] || BLANK}
              areaWidth={areaWidth}
              onSelect={onSelect}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Area;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#edeff5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 6,
    paddingBottom: 6,
    marginHorizontal: 2,
    marginTop: 10,
    borderRadius: 6,
    backgroundColor: '#e5e6f1',
    borderWidth: 2,
    borderTopColor: '#dcdfec',
    borderLeftColor: '#dcdfec',
    borderBottomColor: '#e5e6f1',
    borderRightColor: '#e5e6f1',
  },
});
