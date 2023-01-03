import React, {useRef} from 'react';
import {Animated, Text, Button, InteractionManager} from 'react-native';

// opacity 1 > 0 timing animation
export default function AnimatedComponents() {
  const opacityAnim = useRef(new Animated.Value(1)).current;

  const onButtonPress = () => {
    Animated.timing(opacityAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Button title="사라져라!" onPress={onButtonPress} />
      <Animated.Text style={{fontSize: 70, opacity: opacityAnim}}>
        🍊
      </Animated.Text>
    </>
  );
}
