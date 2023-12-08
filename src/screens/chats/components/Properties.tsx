import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';

const Properties = () => {
  const renderLegend = (title, subTitle, color) => {
    return (
      <View
        style={{flexDirection: 'row', marginBottom: 12, alignItems: 'center'}}>
        <View
          style={{
            height: 18,
            width: 18,
            marginRight: 10,
            borderRadius: 4,
            backgroundColor: color || 'white',
          }}
        />
        <View>
          <Text style={{color: '#000', fontSize: 14, fontWeight: '700'}}>
            {title || ''}
          </Text>
          <Text style={{color: '#000', fontSize: 10}}>{subTitle || ''}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: '#000', fontSize: 18, fontWeight: '700'}}>
          Properties
        </Text>
        <Text style={styles.tasksText}>{'All properties >'}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {/*******    Custom Legend component      ********/}
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}>
          {renderLegend('298', 'Occupied 48%', 'rgb(84,219,234)')}
          {renderLegend('249', 'Occupied 39%', 'lightgreen')}
          {renderLegend('85', 'Occupied 13%', 'orange')}
        </View>
        {/**************************/}

        <PieChart
          strokeColor="white"
          strokeWidth={10}
          // donut
          data={[
            {value: 48, color: 'rgb(84,219,234)'},
            {value: 39, color: 'lightgreen'},
            {value: 13, color: 'orange'},
          ]}
          innerCircleColor="#FFF"
          innerCircleBorderWidth={1}
          innerCircleBorderColor={'white'}
          // showValuesAsLabels={true}
          showText
          textSize={18}
          // showTextBackground={true}
          centerLabelComponent={() => {
            return (
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    textAlign: 'center',
                    color: '#000',
                    fontWeight: '600',
                  }}>
                  632
                </Text>
                <Text
                  style={{fontSize: 12, textAlign: 'center', color: '#000'}}>
                  Total Unit
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Properties;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 15,
    backgroundColor: '#FFF',
    paddingVertical: 20,
  },
  tasksText: {
    color: '#05696b',
  },
});
