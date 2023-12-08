import React, {useRef, useState} from 'react';
import {View, TouchableOpacity, Animated, StyleSheet} from 'react-native';

const FlippableCard = ({frontContent, backContent, frontStyle, backStyle}) => {
  const [isFront, setIsFront] = useState(true);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  const flipCard = () => {
    const initialValue = isFront ? 0 : 180;
    const finalValue = isFront ? 180 : 0;

    setIsFront(!isFront);

    flipAnimation.setValue(initialValue);
    Animated.spring(flipAnimation, {
      toValue: finalValue,
      tension: 1,
      friction: 10,
      useNativeDriver: true,
    }).start();
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{rotateY: frontInterpolate}],
  };
  const backAnimatedStyle = {
    transform: [{rotateY: backInterpolate}],
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={flipCard}>
      <Animated.View
        style={[
          styles.cardContainer,
          frontAnimatedStyle,
          {opacity: isFront ? 1 : 0},
          frontStyle,
        ]}>
        {frontContent}
      </Animated.View>
      <Animated.View
        style={[
          styles.cardContainer,
          styles.backCard,
          backAnimatedStyle,
          {opacity: isFront ? 0 : 1},
          backStyle,
        ]}>
        {backContent}
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    backfaceVisibility: 'hidden',
    position: 'absolute',
  },
  backCard: {
    backgroundColor: '#f0f0f0',
  },
});

export default FlippableCard;
