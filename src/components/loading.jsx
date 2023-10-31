import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';

const loading = (props) => {
  return (
    <View className="flex-1 flex justify-center items-center">
      <ActivityIndicator {...props} />
    </View>
  );
};

export default loading;
