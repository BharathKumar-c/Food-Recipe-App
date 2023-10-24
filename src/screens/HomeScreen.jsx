import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StatusBar} from 'expo-status-bar';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import Categories from '../components/categories';
import axios from 'axios';
import Recipes from '../components/recipes';

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState('Beef');
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        'https://themealdb.com/api/json/v1/1/categories.php'
      );
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (error) {
      console.log('Error ', error.message);
    }
  };

  const getRecipes = async (category = 'Beef') => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      if (response && response.data) {
        setMeals(response.data.meals);
      }
    } catch (error) {
      console.log('Error ', error.message);
    }
  };

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
          {categories.length > 0 && (
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          )}
        </View>

        {/* Recipes */}
        <View>
          <Recipes meals={meals} categories={categories} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
