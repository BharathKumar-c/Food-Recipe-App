import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StatusBar} from 'expo-status-bar';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import Categories from '../components/categories';

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className="space-y-6 pt-14">
        {/* avatar and bell icon */}
        <View className="mx-4 mb-2 flex-row justify-between items-center">
          <Image
            source={require('../../assets/images/avatar.png')}
            style={{height: hp(5), width: hp(5.5)}}
          />
          <BellIcon size={hp(4)} color={'gray'} />
        </View>

        {/* greetings and punchline */}
        <View className="mx-4 space-y-2 mb-2">
          <Text style={{fontSize: hp(1.7)}} className="text-nutral-600">
            Hello, Bharath!
          </Text>
          <View>
            <Text
              style={{fontSize: hp(3.8)}}
              className="font-semibold text-netural-600">
              Make your own food,
            </Text>
          </View>
          <Text
            style={{fontSize: hp(3.8)}}
            className="font-semibold text-netural-600">
            Stay at <Text className="text-amber-400">Home</Text>
          </Text>
        </View>

        {/* Search bar */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor={'gray'}
            style={{fontSize: hp(1.7)}}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />
          <View className="rounded-full p-3 bg-white">
            <MagnifyingGlassIcon
              size={hp(2.5)}
              strokeWidth={3}
              color={'gray'}
            />
          </View>
        </View>

        {/* categories */}
        <View>
          <Categories />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
