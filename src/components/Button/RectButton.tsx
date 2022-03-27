import React, {ReactElement} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  icon: ReactElement;
  size?: number;
  badgeText?: string;
};

function RectButton({icon, size = 16, badgeText}: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View>{icon}</View>
      {badgeText && (
        <View>
          <Text>{badgeText}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default RectButton;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#f0f1f8',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderColor: '#fff',

    shadowColor: '#545a73',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 4,
  },
});
