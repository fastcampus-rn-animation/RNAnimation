import React, {useRef, useEffect} from 'react';
import {Animated, Text, Button, InteractionManager} from 'react-native';

// setValue();
// addListener(callback);
// removeAllListener();
// stopAnimation();
// resetAnimation();
// setOffset();
// flattenOffset();
// extractOffset();

export default function AnimatedValue() {
  const translateXAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      console.log(1);
    });

    return () => translateXAnim.removeAllListeners();
  });

  const onButtonPress = () => {
    translateXAnim.setValue(-100);
    translateXAnim.addListener(({value}) => console.log(value));

    setTimeout(() => {
      translateXAnim.resetAnimation();
    }, 500);

    Animated.timing(translateXAnim, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Button title="움직여라!" onPress={onButtonPress} />
      <Animated.Text
        style={{fontSize: 70, transform: [{translateX: translateXAnim}]}}
      >
        🍊
      </Animated.Text>
    </>
  );
}
