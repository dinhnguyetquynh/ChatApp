import React from 'react';

// import AppRouter from './navigation/router';
// import {firebase} from '@react-native-firebase/auth';

import MessageScreen from './screens/message-screen';

export default function App() {
  // firebase.auth().onAuthStateChanged(user => {
  //   if (user) {
  //     console.log('Đã kết nối với Firebase.');
  //   } else {
  //     console.log('Không kết nối được với Firebase.');
  //   }
  // });
  return <MessageScreen />;
}
