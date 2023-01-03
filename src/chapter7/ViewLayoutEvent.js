import React, {useState} from 'react';
import {View, Text, Dimensions, Button} from 'react-native';

const {width, height} = Dimensions.get('window');
export default function ViewLayoutEvent() {
  const [number, setNumber] = useState(0);
  // console.log(width, height);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View onLayout={e => console.log(e.nativeEvent)} style={{borderWidth: 1}}>
        <Text style={{width: 10}}>{number}</Text>
        <Button
          title="update state"
          onPress={() => setNumber(value => value + 1)}
        />
      </View>
    </View>
  );
}
