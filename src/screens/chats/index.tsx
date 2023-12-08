import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header';
import TaskSummary from './components/taskSummary';
import Properties from './components/Properties';

const ChatScreen: React.FC = () => (
  <View style={styles.container}>
    <Header title={'Dashboard'} />
    <ScrollView>
      <TaskSummary />
      <Properties />
    </ScrollView>
  </View>
);

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
