import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Home from './assets/home';
import Chat from './assets/chat';
import Calendar from './assets/calendar';
import Profile from './assets/profile';
import Cards from './assets/cards';
import DashboardScreen from './src/screens/dashboard';
import ChatScreen from './src/screens/chats';
import CalendarScreen from './src/screens/calendar';
import CardsScreen from './src/screens/cards';
import ProfileScreen from './src/screens/profile';

type RootStackParamList = {
  Dashboard: undefined;
  Chat: undefined;
  Calendar: undefined;
  Cards: undefined;
  Profile: undefined;
};

type TabBarProps = BottomTabBarProps & {
  state: {
    index: number;
    routes: Array<RouteProp<RootStackParamList, keyof RootStackParamList>>;
  };
  descriptors: {
    [key: string]: {
      options: {
        tabBarLabel?: string;
        tabBarIcon?: React.ReactNode;
        tabBarVisible?: boolean;
        tabBarAccessibilityLabel?: string;
        tabBarTestID?: string;
      };
    };
  };
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const GradientTabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{ flexDirection: 'row', height: 60, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#FFF' }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const getIconAccordingToLable = () => {
          // console.error(label);
          if(label === 'Dashboard') {
            return <Home width={60} height={20} fill={isFocused ? '#0D98BA' : '#000'} />
          } else if(label === 'Chat') {
            return <Chat  width={60} height={20} fill={isFocused ? '#0D98BA' : '#000'} />
          } else if(label === 'Calendar') {
            return <Calendar  width={60} height={20} fill={isFocused ? '#0D98BA' : '#000'} />
          } else if(label === 'Cards') {
            return <Cards width={60} height={20} fill={isFocused ? '#0D98BA' : '#000'} />
          } else if(label === 'Profile') {
            return <Profile width={60} height={20} fill={isFocused ? '#0D98BA' : '#000'} />
          } else {
            return <Home  width={60} height={20} fill={'#000'} />;
          }
        }

        return (
          <TouchableWithoutFeedback
            key={index}
            onPress={onPress}
          >{getIconAccordingToLable()}
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}} tabBar={(props) => <GradientTabBar {...props} />}>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Cards" component={CardsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

