import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
}

const DashboardHeader: FC<DashboardHeaderProps> = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.chevron}>This Month ⌄</Text>
      {/*  todo- aman - Add chevronDown icon as SVG here*/}
      </View>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color:"black"
  },
  chevron: {
    fontSize: 14,
    color:"black"
  },
  subtitle: {
    fontSize: 16,
    color:"black"
  },
});

export default DashboardHeader;
