import React,{useCallback} from 'react';
import AppContainer from './src/navigations/AppNavigation';
import {useFonts} from 'expo-font';
import { Provider } from 'react-redux';
import {store} from './src/shared/hooks/store/index';
import * as SplashScreen from 'expo-splash-screen';


// SplashScreen.preventAutoHideAsync();


export default function App() {
  const [fontsLoaded]=useFonts({
    'Google Sans': require('./assets/fonts/ProductSans-Medium.ttf'),
    'Google Sans Italic': require('./assets/fonts/ProductSans-MediumItalic.ttf'),
    'Google Sans Thin': require('./assets/fonts/ProductSans-Thin.ttf'),
  })

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
        <AppContainer />
    </Provider>
  );
}
