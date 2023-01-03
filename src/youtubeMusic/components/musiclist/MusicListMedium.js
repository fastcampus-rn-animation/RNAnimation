import {faker} from '@faker-js/faker';
import React from 'react';
import {View, Text, Image, Dimensions, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');
export default function MusicListMedium() {
  return (
    <View>
      <Title />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}}
      >
        {[...Array(7)].map((val, idx) => {
          return (
            <View style={{marginRight: 20}} key={idx}>
              <MusicListMediumItem />
              <MusicListMediumItem />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

function MusicListMediumItem() {
  return (
    <View>
      <Image
        source={{
          uri: `https://picsum.photos/20${Math.floor(Math.random() * 10)}`,
        }}
        style={{width: width / 4, height: width / 4, borderRadius: 2}}
      />
      <View
        style={{
          width: width / 4,
          height: width / 4,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
        }}
      >
        <Icon name="play" size={28} color="white" />
      </View>
      <Text
        style={{
          color: 'white',
          marginTop: 5,
          width: width / 4,
          fontSize: 13,
          height: 60,
        }}
        numberOfLines={2}
      >
        {faker.music.songName()}
      </Text>
    </View>
  );
}

function Title() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}
    >
      <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
        다시듣기
      </Text>
      <View
        style={{
          borderRadius: 100,
          borderWidth: 1,
          borderColor: '#ddd',
          paddingHorizontal: 10,
          paddingVertical: 4,
        }}
      >
        <Text style={{color: 'white', fontSize: 12}}>더보기</Text>
      </View>
    </View>
  );
}
