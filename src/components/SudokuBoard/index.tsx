import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from '../../uis';
import Area from './Area';
import Board from './Board';
import KeyPad from './KeyPad';
import Rect from './Rect';
import sudoku from '../../lib/_sudoku';

type Props = {};

type IRect = {
  row: number;
  col: number;
  value?: number;
  ri: number;
  area: number;
};

export default function SudokuBoard({}: Props) {
  const [solutionArray, setSolutionArray] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [sudokuArray, setSudokuArray] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [activeRect, setActiveRect] = useState<IRect>({
    ri: 0,
    area: 0,
    row: 0,
    col: 0,
    value: -1,
  });

  const onActive = ({
    ri,
    area,
    row,
    col,
  }: {
    ri: number;
    area: number;
    row: number;
    col: number;
  }) => {
    setActiveRect({ri, area, row, col});
  };

  const onChange = (value: number) => {
    const newArray = [...sudokuArray];
    newArray[activeRect.area][activeRect.ri] = value;
    setSudokuArray(newArray);
  };

  useEffect(() => {
    console.log('render board');
    const problemString: string = sudoku.generate() || '';
    const solutionString: string = sudoku.solve(problemString) || '';
    setSolutionArray(sudoku.board_string_to_grid(solutionString));
    setSudokuArray(sudoku.board_string_to_grid(problemString));
  }, []);

  const mode = (m: IRect) => {
    if (activeRect.area === m.area && activeRect.ri === m.ri) return 'active';
    if (activeRect.area === m.area && activeRect.ri !== m.ri) return 'area';
    if (activeRect.row === m.row || activeRect.col === m.col) return 'row_col';
    return 'normal';
  };

  return (
    <>
      <Board>
        {sudokuArray.map((_a, ai) => {
          // console.log('에리어 :: ', ai);
          return (
            <Area key={ai} area={ai}>
              {sudokuArray[ai].map((_r, ri) => {
                const row = Math.floor(ri / 3) + ai - (ai % 3);
                const col = (ri % 3) + (ai % 3) * 3;
                // console.log('렉트 :: ', ri);
                // console.log(`행:렬 - ${row}:${col}`);
                return (
                  <Rect
                    key={ri}
                    row={row}
                    col={col}
                    area={ai}
                    ri={ri}
                    value={sudokuArray[ai][ri]}
                    // value={`c:${col}//r:${row}`}
                    onActive={onActive}
                    mode={mode({ri, row, col, area: ai})}
                    isAnswer={sudokuArray[ai][ri] === solutionArray[ai][ri]}
                  />
                );
              })}
            </Area>
          );
        })}
      </Board>
      <KeyPad onChange={onChange} />
    </>
  );
}
