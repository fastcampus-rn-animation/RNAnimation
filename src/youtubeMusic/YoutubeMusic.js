import React, {useState, useRef} from 'react';
import {View, Text, ScrollView, Animated} from 'react-native';

import Bottom from './components/bottom/Bottom';

import CategoryHeader from './components/header/CategoryHeader';
import HeaderBackground from './components/header/HeaderBackground';
import LogoHeader from './components/header/LogoHeader';
import MusicListSmall from './components/musiclist/MusicListSmall';
import MusicListMedium from './components/musiclist/MusicListMedium';
import MusicListLarge from './components/musiclist/MusicListLarge';
import Playlist from './components/playlist/Playlist';
import useYoutubeMusic from './useYoutubeMusic';

export default function YoutubeMusic() {
  const [selectedCategory, setSelectedCategory] = useState();
  const {
    onScrollEndDrag,
    onScrollBeginDrag,
    onScroll,
    headerAnim,
    headerBgAnim,
  } = useYoutubeMusic();
  const playlistAnim = useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1, backgroundColor: '#111'}}>
      <HeaderBackground
        selectedCategory={selectedCategory}
        headerBgAnim={headerBgAnim}
      />
      <LogoHeader headerAnim={headerAnim} />
      <CategoryHeader
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        headerAnim={headerAnim}
      />
      <ScrollView
        scrollEventThrottle={1}
        onScrollBeginDrag={onScrollBeginDrag}
        onScroll={onScroll}
        onScrollEndDrag={onScrollEndDrag}
      >
        <View style={{marginBottom: 100}}>
          <MusicListSmall />
          <MusicListMedium />
          <MusicListLarge />
          <MusicListSmall />
          <MusicListMedium />
          <MusicListLarge />
          <MusicListSmall />
          <MusicListMedium />
          <MusicListLarge />
        </View>
      </ScrollView>
      <Playlist playlistAnim={playlistAnim} />
      <Bottom playlistAnim={playlistAnim} />
    </View>
  );
}
