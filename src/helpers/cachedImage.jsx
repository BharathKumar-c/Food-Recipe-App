import {Image, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import Animated from 'react-native-reanimated';

const CachedImage = (props) => {
  // const [cachedSources, setCachedSources] = useState(null);
  const {uri} = props;

  // useEffect(() => {
  //   const getCachedImage = async () => {
  //     try {
  //       const cachedImageData = await AsyncStorage.getItem(uri);
  //       if (cachedImageData) {
  //         setCachedSources({uri: cachedImageData});
  //       } else {
  //         const response = await fetch(uri);
  //         const imageBlob = await response.blob();
  //         const base64Data = await new Promise((resolve) => {
  //           const reader = new FileReader();
  //           reader.readAsDataURL(imageBlob);
  //           reader.onloadend = () => {
  //             resolve(reader.result);
  //           };
  //         });
  //         await AsyncStorage.setItem(uri, base64Data);
  //         setCachedSources({uri: base64Data});
  //       }
  //     } catch (error) {
  //       console.error('Error catching image:', error);
  //       setCachedSources({uri});
  //     }
  //   };

  //   getCachedImage();
  // }, []);

  // return <Animated.Image source={cachedSources} {...props} />;
  return <Image source={{uri: uri}} {...props} />;
};

export default CachedImage;
