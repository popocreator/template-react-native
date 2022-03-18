import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  name: string;
  size?: number;
  color?: string;
  badgeText?: string;
};

function CircleButton({name, size = 16, color = '#333', badgeText}: Props) {
  return (
    <TouchableOpacity>
      <Icon name={name} size={size} color={color} />
      {badgeText && (
        <View>
          <Text>{badgeText}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default CircleButton;
