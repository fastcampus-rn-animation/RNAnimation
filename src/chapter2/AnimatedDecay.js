import React, {useRef} from 'react';
import {Animated, Text, Button} from 'react-native';

// x -100 decay
export default function AnimatedDecay() {
  const translateXAnim = useRef(new Animated.Value(-100)).current;
  const onButtonPress = () => {
    // decay animation
    Animated.decay(translateXAnim, {
      velocity: 1,
      deceleration: 0.995,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      {/* <Button title="거기 멈춰!" onPress={onButtonPress} />
      <Animated.Text
        style={{fontSize: 70, transform: [{translateX: translateXAnim}]}}
      >
        🚗
      </Animated.Text> */}
    </>
  );
}
