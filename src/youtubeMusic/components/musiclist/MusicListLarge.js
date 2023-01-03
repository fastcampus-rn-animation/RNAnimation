import {faker} from '@faker-js/faker';
import React from 'react';
import {View, Text, Image, Dimensions, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');
export default function MusicListLarge() {
  return (
    <View>
      <Title />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}}
      >
        {[...Array(10)].map((val, idx) => {
          return (
            <View style={{marginRight: 20}} key={idx}>
              <MusicListLargeItem />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

function MusicListLargeItem() {
  return (
    <View>
      <Image
        source={{
          uri: `https://picsum.photos/20${Math.floor(Math.random() * 10)}`,
        }}
        style={{width: width / 2.5, height: width / 2.5, borderRadius: 4}}
      />
      <Text
        style={{
          color: 'white',
          marginTop: 5,
          width: width / 2.5,
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
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#999',
            borderRadius: 100,
            marginRight: 10,
            padding: 3,
          }}
        >
          <Icon name="rewind" size={20} color="#999" />
        </View>
        <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
          다시듣기
        </Text>
      </View>
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
