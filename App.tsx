import React from 'react';

// import AppRouter from './navigation/router';
// import {firebase} from '@react-native-firebase/auth';

import AppRouter from './navigation/router';
import MessageScreen from './screens/messageScreen';
import {Example} from './screens/viduGifted';

export default function App() {
  // firebase.auth().onAuthStateChanged(user => {
  //   if (user) {
  //     console.log('Đã kết nối với Firebase.');
  //   } else {
  //     console.log('Không kết nối được với Firebase.');
  //   }
  // });
  return <AppRouter />;
}
