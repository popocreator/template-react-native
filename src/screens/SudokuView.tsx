import React, {useEffect, useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Answer from '../components/Answer';
import Area from '../components/Area';
import CircleButton from '../components/Button/CircleButton';
import sudoku from '../lib/sudoku';

type Props = {};

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
      }}>
      <Area
        problemNumbers={problemNumbers}
        solutionNumbers={solutionNumbers}
        selectedIndex={selectedIndex}
        onSelect={onSelectBlock}
      />
      <View>
        <CircleButton name="star" />
        <CircleButton name="" />
        <CircleButton name="" />
      </View>
      <Answer onChange={onSelectAnswer} />
    </View>
  );
};

export default SudokuView;
