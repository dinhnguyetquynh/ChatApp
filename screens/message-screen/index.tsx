/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import MessageHeader from './components/header';
import MessageFooter from './components/footer';
import Message from './components/message';

interface IMessage {
  _id: string;
  text: string;
  images: Array<string>;
  createdAt: Date;
  user: {
    _id: number;
    name: string;
    avatar: string;
  };
  isMe: boolean;
}

export default function MessageScreen() {
  const [messages, setMessages] = useState<Array<IMessage>>([]);

  useEffect(() => {
    setMessages([
      {
        _id: '1',
        text: 'Hello developer ',
        createdAt: new Date(),
        images: [],
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://i.ibb.co/r3BZwF5/ava.jpg',
        },
        isMe: false,
      },
      {
        _id: '2',
        text: 'Hello developer 1',
        createdAt: new Date(),
        images: [],
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://i.ibb.co/r3BZwF5/ava.jpg',
        },
        isMe: false,
      },
      {
        _id: '3',
        text: 'Hello developer',
        createdAt: new Date(),
        images: ['https://i.ibb.co/r3BZwF5/ava.jpg'],
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://i.ibb.co/r3BZwF5/ava.jpg',
        },
        isMe: true,
      },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <MessageHeader
        avatar="https://i.ibb.co/r3BZwF5/ava.jpg"
        name="Đinh Nguyệt Quỳnh"
        onBack={() => {}}
        status={true}
      />
      <FlatList
        data={messages}
        renderItem={({item}) => {
          console.log(item);
          return <Message {...item} />;
        }}
        style={styles.messages}
        keyExtractor={item => item._id}
      />

      {/* return textinput to chat */}
      <MessageFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column'},
  messages: {flex: 1, backgroundColor: '#ccc', padding: 4},
});
