import {faker} from '@faker-js/faker';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PlaylistMini() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <View style={{marginLeft: 14}}>
        <Text style={{color: '#999'}}>{faker.music.genre()}</Text>
        <Text style={{color: 'white'}}>{faker.music.songName()}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => console.log('play')}>
          <View
            style={{
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Icon name="play" size={24} color={'white'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('skip-next')}>
          <View
            style={{
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Icon name="skip-next" size={24} color={'white'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
