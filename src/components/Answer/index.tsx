import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  PixelRatio,
} from 'react-native';

type Props = {
  onChange: (number: string) => void;
};

const isLargeHeight = Dimensions.get('window').height * PixelRatio.get() > 2500;

const Answer = ({onChange}: Props) => {
  const [numbers, setNumbers] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ]);
  return (
    <View style={styles.container}>
      {numbers.map((number, i) => (
        <TouchableOpacity
          key={i}
          style={[
            styles.card,
            styles.shadow,
            isLargeHeight && (i + 1) % 5 === 0
              ? {
                  marginRight: 0,
                }
              : {
                  marginRight: 10,
                },
            !isLargeHeight && {
              flex: 1,
              marginRight: 4,
            },
          ]}
          onPress={() => onChange(number)}>
          <Text style={styles.cardText}>{number}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={[
          styles.card,
          styles.shadow,
          styles.cancelCard,
          !isLargeHeight && {
            flex: 1,
          },
        ]}
        onPress={() => onChange('.')}>
        <View style={styles.cancel}>
          <Text style={[styles.cardText, styles.cancelText]}>X</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Answer;

const width = () => {
  const isLargeHeight =
    Dimensions.get('window').height * PixelRatio.get() > 2500;
  if (isLargeHeight) {
    return (Dimensions.get('window').width - 12 - 10 * 4) / 5;
  } else {
    return 'auto';
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 6,
  },
  card: {
    backgroundColor: '#f0f1f8',
    width: width(),
    height: (Dimensions.get('window').width - 12 - 10 * 4) / 5 - 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderBottomColor: '#e5e6f1',
    borderRightColor: '#e5e6f1',
  },
  cancelCard: {
    borderBottomColor: '#e5e6f1',
    borderRightColor: '#e5e6f1',
    padding: 2,
  },
  cardText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#545a73',
    shadowColor: '#545a73',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
  },
  shadow: {
    shadowColor: '#545a73',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
  },
  cancel: {
    backgroundColor: '#9094b2',
    flex: 1,
    width: '100%',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    color: '#fcfeff',
  },
});
