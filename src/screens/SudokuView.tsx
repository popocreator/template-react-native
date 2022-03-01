import React, {useEffect, useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Answer from '../components/Answer';
import Area from '../components/Area';
import sudoku from '../lib/sudoku';

type Props = {};

const SudokuView = ({}: Props) => {
  const [problemNumbers, setProblemNumbers] = useState<string[]>([]);
  const [solutionNumbers, setSolutionNumbers] = useState<string[]>([]);

  useEffect(() => {
    const problemString: string = sudoku.generate() || '';
    const solutionString: string = sudoku.solve(problemString) || '';
    setProblemNumbers(problemString.split('') || []);
    setSolutionNumbers(solutionString.split('') || []);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#333',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Area problemNumbers={problemNumbers} solutionNumbers={solutionNumbers} />
      <Answer />
    </View>
  );
};

export default SudokuView;
