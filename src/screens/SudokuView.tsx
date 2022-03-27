import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  PixelRatio,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Answer from '../components/Answer';
import Area from '../components/Area';
import CircleButton from '../components/Button/CircleButton';
import RectButton from '../components/Button/RectButton';
import sudoku from '../lib/sudoku';

type Props = {};

const isLargeHeight = Dimensions.get('window').height * PixelRatio.get() > 2500;

const SudokuView = ({}: Props) => {
  const [fixedNumbers, setFixedNumbers] = useState<string[]>([]); // 문제
  const [problemNumbers, setProblemNumbers] = useState<string[]>([]); // 문제 + 사용자 입력
  const [solutionNumbers, setSolutionNumbers] = useState<string[]>([]); // 해답

  useEffect(() => {
    const problemString: string = sudoku.generate() || '';
    const solutionString: string = sudoku.solve(problemString) || '';
    setFixedNumbers(problemString.split('') || []);
    setProblemNumbers(problemString.split('') || []);
    setSolutionNumbers(solutionString.split('') || []);
  }, []);

  const isFixedNumber = () => {
    return fixedNumbers[selectedIndex] !== '.';
  };

  const isCorrectNumber = () => {
    return problemNumbers[selectedIndex] === solutionNumbers[selectedIndex];
  };

  // Index
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const onSelectBlock = (index: number) => {
    if (index === selectedIndex) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  // Answer
  const onSelectAnswer = (selectedAnswer: string) => {
    if (isFixedNumber() || isCorrectNumber()) {
      console.log('맞는 숫자입니다');
    } else {
      let newProblemNumbers = [...problemNumbers];
      newProblemNumbers[selectedIndex] = selectedAnswer;
      setProblemNumbers(newProblemNumbers);
    }
  };

  // Hint
  // Memo

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
      }}>
      <StatusBar hidden />
      <View
        style={{
          flexDirection: 'row',
          paddingBottom: isLargeHeight ? 20 : 10,
          width: Dimensions.get('window').width,
          justifyContent: 'space-between',
          paddingHorizontal: 24,
          // display: Platform.OS === 'ios' ? 'flex' : 'none',
        }}>
        <RectButton
          icon={
            <Image
              style={{width: 20, height: 20}}
              source={require('../assets/icons/back.png')}
            />
          }
        />
        <RectButton
          icon={
            <Image
              style={{width: 20, height: 20}}
              source={require('../assets/icons/setting.png')}
            />
          }
        />
      </View>
      <Area
        problemNumbers={problemNumbers}
        solutionNumbers={solutionNumbers}
        selectedIndex={selectedIndex}
        onSelect={onSelectBlock}
      />
      <View style={styles.utils}>
        <View style={styles.buttons}>
          <CircleButton
            icon={
              <Image
                style={{width: 20, height: 20}}
                source={require('../assets/icons/undo.png')}
              />
            }
          />
          <View style={{width: 12}}></View>
          <CircleButton
            icon={
              <Image
                style={{width: 20, height: 20}}
                source={require('../assets/icons/pencil.png')}
              />
            }
          />
          <View style={{width: 12}}></View>
          <CircleButton
            icon={
              <Image
                style={{width: 20, height: 20}}
                source={require('../assets/icons/hint.png')}
              />
            }
          />
        </View>
        <View style={styles.timer}>
          <Text>타이머</Text>
        </View>
      </View>
      <View style={styles.answer}>
        <Answer onChange={onSelectAnswer} />
      </View>
    </View>
  );
};

export default SudokuView;

const styles = StyleSheet.create({
  utils: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    marginTop: 5,
    paddingTop: isLargeHeight ? 20 : 10,
    paddingBottom: isLargeHeight ? 26 : 16,
    paddingHorizontal: 16,
  },
  buttons: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  timer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    display: 'none', // TODO 타이머 유아이
  },
  answer: {},
});
