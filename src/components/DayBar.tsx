import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export interface DayData {
  date: string;
  value: number;
}

interface DayBarProps {
  barHeight: number;
  data: DayData;
}

const animationDuration = 1000;
function DayBar({barHeight, data}: DayBarProps) {
  const animatedStyle = useAnimatedStyle(() => ({
    height: withTiming(barHeight * data.value - 28, {
      duration: animationDuration,
    }),
    opacity: withTiming(data.value, {duration: animationDuration}),
  }));

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.barWrapper, animatedStyle]} />
      <Text style={styles.weekName}>{moment(data.date).format('ddd')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  barWrapper: {backgroundColor: '#f5f5f5', borderRadius: 32},
  weekName: {color: '#f5f5f5', fontSize: 13, height: 20, textAlign: 'center'},
  wrapper: {flex: 1, rowGap: 8},
});

export default DayBar;
