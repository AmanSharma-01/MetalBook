import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import Header from '../../components/Header';
import BorderLine from '../../components/BorderLine';
import DashboardHeader from '../../components/DashboardHeader';
import ListItem from '../../components/ListItem';
import Home from '../../../assets/home';
import {BarChart} from 'react-native-gifted-charts';
import Dollar from '../../../assets/dollar.svg';

const barData = [
  {value: 100, label: 'Mar', frontColor: '#7be3de'},
  {value: 170, label: 'Apr', frontColor: '#7be3de'},
  {value: 240, label: 'May', frontColor: '#7be3de'},
  {value: 320, label: 'Jun', frontColor: '#7be3de'},
  {value: 170, label: 'Jul', frontColor: '#7be3de'},
  {value: 100, label: 'Aug', frontColor: '#7be3de'},
];

const DashboardScreen: React.FC = () => (
  <View style={styles.container}>
    <Header title={'Dashboard'} backgroundColor={'#e1e3e3'} />
    <ScrollView style={styles.mainContainer}>
      <DashboardHeader
        title={'Accounting'}
        subtitle={'Aug 1, 2022 - Aug 1, 2023'}
      />
      <BorderLine marginHorizontal={20} />
      <View style={{padding: 20}}>
        <Text style={{color: 'black', fontWeight: 'bold', marginBottom: 5}}>
          AVG. Monthly Income
        </Text>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 26,
            marginBottom: 5,
          }}>
          $5,849.36
        </Text>
        <Text style={{color: 'black'}}>
          <Text style={{color: 'green'}}>3.89% </Text>
          <Text>vs </Text>
          <Text style={{fontWeight: 'bold', color: 'black'}}>$5.432.74 </Text>
          <Text style={{color: 'black'}}>prev. 90 days</Text>
        </Text>
        <View>
          <BarChart
            barWidth={40}
            showVerticalLines={false}
            barBorderTopLeftRadius={100}
            barBorderTopRightRadius={100}
            frontColor="lightgray"
            data={barData}
            yAxisThickness={0}
            xAxisThickness={0}
            noOfSections={1}
          />
        </View>
      </View>

      <BorderLine />
      {/*todo: Aman, Add SVG icons here*/}
      <ListItem
        title={'$89,999.99'}
        subtitle={'Total Income'}
        leftIcon={<Dollar height={40} width={40} />}
      />
      {/*todo: Aman, Add SVG icons here*/}
      <ListItem
        title={'$16,237.99'}
        subtitle={'Total Expenses'}
        leftIcon={<Dollar height={40} width={40} />}
      />
    </ScrollView>
  </View>
);

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e3e3',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
