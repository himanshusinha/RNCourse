import { NavigationContainer } from '@react-navigation/native';
import './global.css';
import BottomTabNavigator from './src/navigations/BottomTabNavigator';
import DrawerNavigation from './src/navigations/DrawerNavigator';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </>
  );
}
