import React from 'react';
import {initializeApp} from 'firebase/app';
import {StatusBar} from 'react-native';

import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';

import RestaurantsContextProvider from './src/services/restaurants/restaurants.contex';
import LocationContextProvider from './src/services/location/location.context';
import FavouritesContexProvider from './src/services/favourites/favourites.contex';
import AuthenticationContexProvider from './src/services/authentication/authentication.contex';
import Navigator from './src/infrastructure/navigation/index';

const firebaseConfig = {
  apiKey: 'AIzaSyAMSEvM7gmscUg8jCZiF3ez4F_rpkP_hTI',
  authDomain: 'mealstogo-dbfaf.firebaseapp.com',
  projectId: 'mealstogo-dbfaf',
  storageBucket: 'mealstogo-dbfaf.appspot.com',
  messagingSenderId: '172850995982',
  appId: '1:172850995982:web:ffce1e1b173100dfc96d5f',
};

const app = initializeApp(firebaseConfig);

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContexProvider>
          <FavouritesContexProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigator />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContexProvider>
        </AuthenticationContexProvider>
      </ThemeProvider>

      <StatusBar backgroundColor={'white'} />
    </>
  );
};

export default App;
