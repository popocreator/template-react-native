import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  name: string;
  size?: number;
  color?: string;
};

function RectButton({name, size = 16, color = '#333'}: Props) {
  return (
    <TouchableOpacity>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}

export default RectButton;
