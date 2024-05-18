import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {TabBarIconProps} from './types';

const TabBarIcon: React.FC<TabBarIconProps> = ({name, color}) => {
  return <Icon name={name} size={20} color={color} solid />;
};

export default TabBarIcon;
