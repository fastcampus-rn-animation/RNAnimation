import React, {useRef} from 'react';
import {Animated, Text, Button, View} from 'react-native';

// y축 -100 100으로 이동하는 spring 애니메이션
export default function AnimatedSpring() {
  const translateYAnim = useRef(new Animated.Value(-100)).current;
  const onButtonPress = () => {
    translateYAnim.setValue(-100);
    Animated.spring(translateYAnim, {
      toValue: 100,

      // bounciness: 16, // 탄력 제어
      // speed: 12,

      friction: 2, // 에너지를 소비
      tension: 20, // 스프링이 얼마나 많은 에너지를 가졌는가

      // stiffness: 100, // 스프링의 강도
      // damping: 2, // 마찰력
      // mass: 10, // 용수철 끝에 매달려있는 물체의 질량

      velocity: 20,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <Button title="스프링으로 움직인다" onPress={onButtonPress} />
      <Animated.Text
        style={{
          fontSize: 70,
          transform: [
            {
              translateY: translateYAnim,
            },
          ],
        }}
      >
        🍊
      </Animated.Text>
    </View>
  );
}
