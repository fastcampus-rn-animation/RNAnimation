import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {collapseData} from '../utils/data';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function LayoutAnimationCollapse() {
  const [expanded, setExpanded] = useState();
  const onPress = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(value => (value === index ? undefined : index));
  };

  return (
    <SafeAreaView>
      {collapseData.map((value, index) => {
        return (
          <View key={index}>
            {/* 질문 */}
            <TouchableWithoutFeedback onPress={() => onPress(index)}>
              <View
                style={{
                  backgroundColor: '#006aff',
                  padding: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: '#428df5',
                }}
              >
                <Text style={{color: 'white', fontSize: 15}}>
                  {index + 1}) {value.q}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            {/* 답변 */}
            {expanded === index && (
              <View
                style={{
                  backgroundColor: '#f4f4f4',
                  borderBottomWidth: 1,
                  borderBottomColor: '#ddd',
                  padding: 20,
                  paddingLeft: 40,
                }}
              >
                <Text>{value.a}</Text>
              </View>
            )}
          </View>
        );
      })}
    </SafeAreaView>
  );
}
