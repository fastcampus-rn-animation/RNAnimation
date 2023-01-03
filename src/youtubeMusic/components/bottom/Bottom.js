import React from 'react';
import {View, Text, TouchableOpacity, Animated, Dimensions} from 'react-native';
import {BOTTOM_HEIGHT} from '../../utils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getBottomSpace} from 'react-native-iphone-x-helper';
const {width, height} = Dimensions.get('window');

export default function Bottom({playlistAnim}) {
  return (
    <Animated.View
      style={{
        marginBottom: playlistAnim.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [
            0,
            -BOTTOM_HEIGHT - getBottomSpace(),
            -BOTTOM_HEIGHT - getBottomSpace(),
          ],
        }),
      }}
    >
      <View
        style={{
          backgroundColor: '#222',
          paddingBottom: getBottomSpace(),
        }}
      >
        <View style={{height: BOTTOM_HEIGHT}}>
          <View style={{flexDirection: 'row'}}>
            <BottomItem title="홈" name="home-filled" />
            <BottomItem title="둘러보기" name="explore" />
            <BottomItem title="보관함" name="library-music" />
          </View>
        </View>
      </View>
    </Animated.View>
  );
}

function BottomItem({name, title}) {
  return (
    <TouchableOpacity style={{alignItems: 'center', flex: 1}}>
      <View style={{marginVertical: 4}}>
        <Icon name={name} color="white" size={20} />
      </View>
      <Text style={{color: 'white', fontSize: 12}}>{title}</Text>
    </TouchableOpacity>
  );
}
