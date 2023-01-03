import React, {useRef, useState} from 'react';
import {View, Text, Dimensions, PanResponder, Animated} from 'react-native';

const {width, height} = Dimensions.get('window');
export default function MobilePay() {
  const [focus, setFocus] = useState(5);
  const cardRef = useRef('fold'); // fold, unfold
  const yAnim = useRef(new Animated.Value(0)).current;
  const rotateZAnim = useRef(new Animated.Value(0)).current;
  const card = [
    {color: '#aaa', xAnim: useRef(new Animated.Value(0)).current},
    {color: '#bbb', xAnim: useRef(new Animated.Value(0)).current},
    {color: '#ccc', xAnim: useRef(new Animated.Value(0)).current},
    {color: '#ddd', xAnim: useRef(new Animated.Value(0)).current},
    {color: '#eee', xAnim: useRef(new Animated.Value(0)).current},
    {color: '#f2f2f2', xAnim: useRef(new Animated.Value(0)).current},
  ];

  const panResponer = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const {dy, dx} = gestureState;
      // dy, dx 뭐가 더 크게 변했을까
      const XSlider = Math.abs(dy) < Math.abs(dx);
      const YSlider = Math.abs(dx) < Math.abs(dy);
      if (XSlider) {
        // 카드 버리기
        if (dx < -5 && cardRef.current === 'fold' && 0 <= focus) {
          card[focus].xAnim.setValue(dx);
        }

        // 카드 가져오기
        // if (5 < dx && cardRef.current === 'fold' && focus <= 5) {
        //   card[focus].xAnim.setValue(dx);
        // }
      }

      if (YSlider) {
        if (5 < dy && dy < 100 && cardRef.current === 'fold') {
          yAnim.setValue(dy);
        }

        if (5 < dy && dy < 100 && cardRef.current === 'unfold') {
          rotateZAnim.setValue(dy);
        }

        if (-75 < dy && dy < 5 && cardRef.current === 'unfold') {
          yAnim.setValue(65 + dy);
        }
      }
    },
    onPanResponderEnd: (evt, gestureState) => {
      const {dy, dx} = gestureState;
      const XSlider = Math.abs(dy) < Math.abs(dx);
      const YSlider = Math.abs(dx) < Math.abs(dy);
      if (XSlider) {
        if (dx < -5 && cardRef.current === 'fold' && 0 <= focus) {
          Animated.timing(card[focus].xAnim, {
            toValue: -600,
            duration: 300,
            useNativeDriver: false,
          }).start(({finished}) => {
            if (finished) {
              setFocus(el => el - 1);
            }
          });
        }

        if (5 < dx && cardRef.current === 'fold' && focus < 5) {
          Animated.timing(card[focus + 1].xAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }).start(({finished}) => {
            if (finished) {
              setFocus(el => el + 1);
            }
          });
        }
      }

      if (YSlider) {
        if (5 < dy) {
          Animated.spring(yAnim, {
            toValue: 65,
            duration: 300,
            useNativeDriver: false,
          }).start();
          cardRef.current = 'unfold';
        }

        if (5 < dy && cardRef.current === 'unfold') {
          Animated.spring(rotateZAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }).start();
        }

        if (dy < -5) {
          Animated.spring(yAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }).start();
          cardRef.current = 'fold';
        }
      }
    },
  });

  return (
    <View
      {...panResponer.panHandlers}
      style={{
        flex: 1,
        borderWidth: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          position: 'relative',
          width: width * 0.7,
          height: width * 0.7 * 0.58 + (card.length - 1) * 20,
        }}
      >
        {card.map((value, index) => {
          const multiplyValue = useRef(new Animated.Value(index - 3)).current;
          const translateY = Animated.multiply(yAnim, multiplyValue);
          return (
            <Animated.View
              key={index}
              style={{
                transform: [
                  {translateY: translateY},
                  {translateX: value.xAnim},
                  {
                    rotateZ: rotateZAnim.interpolate({
                      inputRange: [0, 20],
                      outputRange: ['0deg', '2deg'],
                    }),
                  },
                ],
                position: 'absolute',
                marginTop: index * 20,
                backgroundColor: value.color,
                borderRadius: 4,
                width: width * 0.7,
                height: width * 0.7 * 0.58,
                shadowOffset: {
                  width: -3,
                  height: -3,
                },
                shadowOpacity: 0.2,
                shadowRadius: 10,
              }}
            />
          );
        })}
      </View>
    </View>
  );
}
