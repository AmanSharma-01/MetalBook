import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import BorderLine from '../../../components/BorderLine';
import {LineChart} from 'react-native-gifted-charts';
import FlippableCard from '../../../components/FlipableCard';

const data = [
  {title: 'New', number: 3, backsideTitle: 'Metal', backgroundColor: '#ff6700'},
  {
    title: 'Assigned',
    number: 16,
    backsideTitle: 'Book',
    backgroundColor: '#0047ab',
  },
  {
    title: 'Closed',
    number: 32,
    backsideTitle: 'Assignment',
    backgroundColor: '#89cff0',
  },
];

const TaskSummary = () => {
  const lineChartData = [
    {value: 10},
    {value: 15},
    {value: 13},
    {value: 20},
    {value: 15},
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task Summary</Text>

      <View
        style={{
          height: 80,
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {data?.map((singleCadData, index) => {
          return (
            <View style={{flex: 1}}>
              <FlippableCard
                frontContent={
                  <View style={{padding: 15}}>
                    <Text style={{color: '#fff', fontSize: 12}}>{singleCadData.title}</Text>
                    <Text style={{color: '#fff', fontSize: 18, marginTop: 8, fontWeight: '700'}}>{singleCadData?.number}</Text>
                  </View>
                }
                backContent={
                  <View style={{padding: 15}}>
                    <Text style={{color: '#fff'}}>
                      {singleCadData.backsideTitle}
                    </Text>
                  </View>
                }
                frontStyle={{
                  backgroundColor: singleCadData.backgroundColor,
                  borderRadius: 20,
                }}
                backStyle={{
                  backgroundColor: '#333',
                  borderRadius: 20,
                }}
              />
            </View>
          );
        })}
      </View>

      <Text style={styles.tasksText}>{'See all today tasks >'}</Text>

      <View>
        <BorderLine />
      </View>

      <View style={styles.completionRateContainer}>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <View>
            <Text style={styles.completionText}>On-time Completion Rate</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={{color: '#000', fontSize: 22, fontWeight: '700'}}>
                98%
              </Text>
              <Text style={{color: 'green', fontSize: 10}}> &#8599; 2.73%</Text>
            </View>
          </View>

          <View style={{marginTop: -80}}>
            <LineChart
              data={lineChartData}
              curved={true}
              hideAxesAndRules={true}
              hideDataPoints={true}
              spacing={30}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TaskSummary;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopWidth: 0.5,
    borderColor: '#333',
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  face: {
    backgroundColor: 'red',
  },
  back: {
    backgroundColor: 'green',
  },
  card: {
    height: 20,
    backgroundColor: 'blue',
  },
  tasksText: {
    color: '#05696b',
    marginVertical: 20,
  },
  completionRateContainer: {
    marginTop: 20,
  },
  completionText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 12,
  },
});
