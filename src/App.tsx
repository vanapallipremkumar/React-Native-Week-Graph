import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import WeekGraph, {WeekData} from './components/WeekGraph';
import {generatePast10WeeksData} from './constants';

function App() {
  const {width} = useWindowDimensions();
  const [data, setData] = useState<WeekData[]>([]);

  useEffect(() => {
    setData(generatePast10WeeksData());
  }, []);

  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.wrapper}>
        <WeekGraph
          barHeight={200}
          data={data}
          footerHeight={50}
          width={width - 32}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {backgroundColor: '#00171f', flex: 1},
  wrapper: {flex: 1, justifyContent: 'center', paddingHorizontal: 16},
});

export default App;
