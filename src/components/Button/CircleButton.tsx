import React, {ReactElement} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  icon: ReactElement;
  size?: number;
  badgeText?: string;
};

function CircleButton({icon, size = 16, badgeText}: Props) {
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

export default CircleButton;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,

    shadowColor: '#545a73',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
  },
});
