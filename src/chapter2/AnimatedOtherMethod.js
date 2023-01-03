import React, {useRef} from 'react';
import {Animated, Text, Button} from 'react-native';

// Animated 사칙연산 메소드
// add, subtract, divide, multiply
// Animated 핸들러 메소드
// start, reset, loop
export default function AnimatedOtherMethod() {
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const onButtonPress = () => {
    Animated.loop(
      Animated.timing(opacityAnim, {
        toValue: 0,
        useNativeDriver: true,
      }),
      {iterations: 3},
    ).start();
  };

  return (
    <>
      <Button title="button" onPress={onButtonPress} />
      <Animated.Text style={{fontSize: 70, opacity: opacityAnim}}>
        🍊
      </Animated.Text>
    </>
  );
}
