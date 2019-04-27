import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Friends from './screens/Friends';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends},
});

const App = createAppContainer (AppNavigator);

export default App;
