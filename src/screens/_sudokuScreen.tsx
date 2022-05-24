import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SudokuBoard from '../components/SudokuBoard';
import {Container, Header} from '../layout';
import {Text} from '../uis';

type Props = {};

export default function SudokuScreen({}: Props) {
  const [time, setTime] = useState<number>(0);
  useEffect(() => {
    const timeout = setTimeout(() => setTime(time + 1), 1000);
    return () => clearTimeout(timeout);
  }, [time]);

  function lpad(str: string, padLen: number, padStr: string) {
    if (padStr.length > padLen) {
      console.log('오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다');
      return str;
    }
    str += ''; // 문자로
    padStr += ''; // 문자로
    while (str.length < padLen) str = padStr + str;
    str = str.length >= padLen ? str.substring(0, padLen) : str;
    return str;
  }
  // console.log(lpad("01", 5, "0")); // 00001

  const formatTime = (second: number) => {
    let hh = Math.floor(second / 3600);
    let mm = Math.floor((second - hh * 3600) / 60);
    let ss = second - mm * 60;
    return (
      lpad(hh + '', 2, '0') +
      ':' +
      lpad(mm + '', 2, '0') +
      ':' +
      lpad(ss + '', 2, '0')
    );
  };

  return (
    <SafeAreaView style={s.root}>
      <Header>
        <View style={s.header}>
          <Text style={s.level}>Easy</Text>
          <Text style={s.time}>{formatTime(time)}</Text>
        </View>
      </Header>
      <Container style={s.container}>
        <SudokuBoard />
      </Container>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
  },
  level: {
    marginRight: 'auto',
  },
  time: {},
  container: {},
});
