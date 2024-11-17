import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {useEffect, useState} from 'react';

import {DeviceMotion} from 'expo-sensors';

export default function App() {
  const [rotationInfo, setRotationInfo] = useState({beta: 0, gamma: 0});

  useEffect(function(){
    DeviceMotion.setUpdateInterval(100);
    DeviceMotion.addListener(function({rotation: {beta, gamma}}){
      setRotationInfo({
        beta: beta,
        gamma: gamma,
      });      
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>X axis: {rotationInfo.beta}</Text>
      <Text>Y axis: {rotationInfo.gamma}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
