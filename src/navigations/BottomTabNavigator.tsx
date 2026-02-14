import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/search/SearchScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import ProfileScreen from '../screens/profile/ProfileScreen';
const Tab = createBottomTabNavigator();

const TabBarButton = ({ children, onPress }: any) => {
  return (
    <TouchableOpacity style={[styles.button, styles.shadow]} onPress={onPress}>
      <View style={styles.buttonView}>{children}</View>
    </TouchableOpacity>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: 'transparent',
        },
      }}
    >
      {/* HOME */}
      <Tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={25}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />

      {/* SEARCH */}
      <Tab.Screen
        name={'Search'}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="search"
              size={25}
              color={focused ? 'black' : 'grey'}
            />
          ),
          tabBarButton: props => <TabBarButton {...props} />,
        }}
      />

      {/* PROFILE */}
      <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="user"
              size={25}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  button: {
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
