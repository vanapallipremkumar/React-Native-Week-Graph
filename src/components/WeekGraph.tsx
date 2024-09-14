import moment from 'moment';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DayBar, {DayData} from './DayBar';

export interface WeekData {
  data: DayData[];
  startDate: string;
}

interface WeekGraphProps {
  barHeight: number;
  data: WeekData[];
  footerHeight: number;
  width: number;
}

function WeekGraph({barHeight, data, footerHeight, width}: WeekGraphProps) {
  const scrolled = useRef<boolean>(false);
  const flatlistRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (data.length > 0 && !scrolled.current) {
      setActiveIndex(data.length - 1);
    }
  }, []);

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<WeekData>) => {
      const startDayOfTheWeek = moment(item.startDate).format('DD MMMM');
      return (
        <View style={[styles.weekNameWrapper, {width}]}>
          <Text style={styles.weekName}>Week of {startDayOfTheWeek}</Text>
        </View>
      );
    },
    [width],
  );

  const onContentSizeChange = () => {
    scrolled.current = true;
    flatlistRef.current?.scrollToEnd({animated: false});
  };
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {x} = event.nativeEvent.contentOffset;
    const currentIndex = Math.round(x / width);
    if (currentIndex !== activeIndex) {
      setActiveIndex(currentIndex);
    }
  };

  const weekData = useMemo(() => data[activeIndex], [activeIndex]);

  return (
    <View style={{height: barHeight + footerHeight, width}}>
      <View style={[styles.chartWrapper, {height: barHeight}]}>
        {weekData
          ? weekData.data.map((dayData, dayIndex) => (
              <DayBar
                barHeight={barHeight}
                data={dayData}
                key={`day-bar-${dayIndex}`}
              />
            ))
          : null}
      </View>
      <FlatList
        bounces={false}
        contentContainerStyle={styles.flatlistContent}
        data={data}
        horizontal
        initialNumToRender={3}
        keyExtractor={week => `week-${week.startDate}`}
        onContentSizeChange={
          scrolled.current || data.length < 1 ? undefined : onContentSizeChange
        }
        onScroll={onScroll}
        pagingEnabled
        ref={flatlistRef}
        renderItem={renderItem}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        style={[styles.flatlist, {height: footerHeight}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chartWrapper: {
    alignItems: 'flex-end',
    columnGap: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    width: '100%',
  },
  flatlist: {width: '100%'},
  flatlistContent: {flexGrow: 1},
  weekName: {color: '#007ea7', fontSize: 16, fontWeight: '500'},
  weekNameWrapper: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
});
export default WeekGraph;
