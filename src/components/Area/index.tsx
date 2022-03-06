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
        <View style={[styles.blockListBorder]}>
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
  blockListBorder: {
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 10,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f1f8',
    // backgroundColor: 'red',
    marginHorizontal: 6,
    shadowColor: '#545a73',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 1,

    borderWidth: 1,
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderBottomColor: '#edeff5',
    borderRightColor: '#edeff5',
  },
  blockList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: 'white',
    borderWidth: 2,
    borderTopColor: '#d5d9e9',
    borderLeftColor: '#d5d9e9',
    borderBottomColor: '#edeff5',
    borderRightColor: '#edeff5',
    marginHorizontal: 8,
    paddingVertical: 2,
  },
});
