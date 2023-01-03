import React, {useRef} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {faker} from '@faker-js/faker';

export default function FlatlistCheckRenderItems() {
  const renderedItems = useRef([]);
  const onViewableItemsChanged = ({viewableItems}) => {
    const ViewavleItems = viewableItems.map(value => JSON.stringify(value));
    ViewavleItems.forEach(item => {
      if (renderedItems.current.findIndex(value => value === item) === -1) {
        renderedItems.current = renderedItems.current.concat(item);
        console.log(item);
      }
    });
  };

  const viewabilityConfigCallbackPairs = useRef([{onViewableItemsChanged}]);
  return (
    <SafeAreaView>
      <FlatList
        data={faker.datatype.array(40)}
        renderItem={renderItem}
        keyExtractor={item => item}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
    </SafeAreaView>
  );
}

function renderItem({item, index}) {
  return (
    <View
      style={{padding: 20, borderBottomWidth: 1, borderBottomColor: '#ddd'}}
    >
      <Text>
        {index}. {item}
      </Text>
    </View>
  );
}
