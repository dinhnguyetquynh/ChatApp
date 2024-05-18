/* eslint-disable react/react-in-jsx-scope */
import {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

import {IconButton, MD3Colors} from 'react-native-paper';

interface Message {
  _id: number;
  text: string;
  createdAt: Date;
  user: {
    _id: number;
    name: string;
    avatar: string;
  };
}

export default function MessageScreen() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: require('../assets/img/ava.jpg'),
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <View style={{flex: 1}}>
      {/* return header */}
      <View style={styles.headerCointainer}>
        <IconButton icon="keyboard-backspace" size={24} />
        <Image
          source={require('../assets/img/ava.jpg')}
          style={styles.avaChat}
        />
        <View style={styles.textInfo}>
          <Text>Đinh Nguyệt Quỳnh</Text>
          <Text>Online</Text>
        </View>
        <View style={styles.iconHead}>
          <IconButton icon="phone-outline" size={24} />
          <IconButton icon="video-outline" size={24} />
          <IconButton icon="format-list-bulleted" size={24} />
        </View>
      </View>
      {/* return chat  */}

      {/* return textinput to chat */}
      {/* <View style={styles.inputMess}>
        <View style={styles.textinput}>
          <TextInput placeholder="Nhập tin nhắn" />
        </View>

        <View style={styles.btnSend}>
          <IconButton icon="send" size={24} iconColor={MD3Colors.neutral60} />
        </View>
  </View>*/}
      <View style={{flex: 1}}>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerCointainer: {
    borderBottomWidth: 0.5,
    borderBlockColor: 'grey',
    padding: 5,
    flexDirection: 'row',
  },
  avaChat: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginTop: 7,
  },
  textInfo: {
    marginLeft: 10,
    marginTop: 10,
  },
  iconHead: {
    flexDirection: 'row',
    marginLeft: 40,
  },
  inputMess: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textinput: {
    width: 320,
    margin: 10,
    borderRadius: 12,
    paddingLeft: 20,
    backgroundColor: '#F3F3F3',
  },
  btnSend: {
    margin: 10,
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#0162C4',
  },
});
