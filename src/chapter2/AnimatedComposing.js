import React, {useRef} from 'react';
import {Animated, Text, Button} from 'react-native';

// sequence, delay, parallel, stagger

// 1) y -200>0 timing
// 2) x 0>100 timing
export default function AnimatedComposing() {
  const translateXAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(-200)).current;

  const onButtonPress = () => {
    // setTimeout(() => {
    //   translateYAnim.stopAnimation();
    // }, 500);

    Animated.stagger(1000, [
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateXAnim, {
        toValue: 100,
        duration: 1300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <>
      <Button title="Button" onPress={onButtonPress} />
      <Animated.Text
        style={{
          fontSize: 70,
          transform: [
            {
              translateX: translateXAnim,
            },
            {
              translateY: translateYAnim,
            },
          ],
        }}
      >
        🍊
      </Animated.Text>
    </>
  );
}
