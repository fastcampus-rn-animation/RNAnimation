import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

// useState update, create, delete > LayoutAnimation 어떤/어떻게 인터렉션을 줄 수 있을까?
// layout animation preset
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function LayoutAnimationIntro() {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);

  const onButtonPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    // LayoutAnimation.configureNext(
    //   {
    //     duration: 300,
    //     // type: easeIn, spring, linear
    //     // property: opacity, scaleX, scaleY, scaleXY

    //     create: {type: 'easeIn', property: 'opacity'},
    //     update: {type: 'spring', property: 'scaleX', springDamping: 0.3},
    //     delete: {type: 'linear', property: 'scaleXY'},
    //   },
    //   () => console.log('end'),
    //   () => console.log('fail'),
    // );

    setCount(value => value * 10);
    setShow(value => !value);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="layout animation 작동!" onPress={onButtonPress} />
      <View style={{width: 250, height: 250}}>
        {/* upate */}
        <View style={{backgroundColor: 'orange'}}>
          <Text style={{fontSize: 50}}>{count}</Text>
        </View>
        {/* create, delete */}
        {show && (
          <View style={{backgroundColor: 'green', marginTop: 10}}>
            <Text style={{fontSize: 30}}>보이는 컴포넌트</Text>
          </View>
        )}
      </View>
    </View>
  );
}
