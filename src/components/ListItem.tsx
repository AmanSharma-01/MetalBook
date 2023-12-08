import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ListItemProps {
  leftIcon: React.ReactNode; // SVG or any other React Node
  title: string;
  subtitle: string;
}

const ListItem: FC<ListItemProps> = ({leftIcon, title, subtitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{leftIcon}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  iconContainer: {
    marginHorizontal: 20,
  },
  textContainer: {
    flex: 0.7,
  },
  title: {
    fontSize: 26,
    letterSpacing: 1,
    fontWeight: '500',
    color: 'black',
  },
  subtitle: {
    fontSize: 14,

    color: 'black',
  },
});

export default ListItem;
