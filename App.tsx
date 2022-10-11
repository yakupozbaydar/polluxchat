import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector} from 'react-redux';
import AppNavigation from './src/navigation/AppNavigation';
import { store} from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  )
}

