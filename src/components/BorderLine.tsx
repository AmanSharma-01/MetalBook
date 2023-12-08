import React, {FC} from 'react';
import {View, ViewStyle} from 'react-native';

interface BorderLineProps {
  marginVertical?: number;
  marginHorizontal?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  color?: string;
}

const BorderLine: FC<BorderLineProps> = ({
  marginVertical = 0,
  marginHorizontal = 0,
  paddingVertical = 0,
  paddingHorizontal = 0,
  color = 'rgba(128, 128, 128, 0.4)',
}) => {
  const borderBottomStyles: ViewStyle = {
    marginVertical,
    marginHorizontal,
    paddingVertical,
    paddingHorizontal,
    borderBottomWidth: 1,
    borderBottomColor: color,
    flexGrow: 1,
  };

  return <View style={borderBottomStyles} />;
};

export default BorderLine;
