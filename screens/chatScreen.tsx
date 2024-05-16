import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.textHead}>Tin nhắn</Text>
        <TouchableOpacity>
          <Image source={require('../assets/img/Vector.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.search}>
        <TextInput placeholder="Search" />
      </View>
      <View style={styles.message}>
        <View style={styles.img_and_mes}>
          <Image
            source={require('../assets/img/ava.jpg')}
            style={styles.imgAva}
          />
          <View style={styles.last_mes}>
            <Text style={styles.name}>Đinh Nguyệt Quỳnh</Text>
            <Text>Deadline tối 9h</Text>
          </View>
        </View>

        <View>
          <Text>12 min</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},

  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'grey',
    borderWidth: 0.5,
    padding: 20,
  },
  textHead: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  search: {
    margin: 20,
    borderRadius: 12,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    backgroundColor: '#F3F3F3',
  },
  message: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-between',
    backgroundColor: '#615EF00F',
    margin: 12,
    borderRadius: 12,
  },
  imgAva: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  img_and_mes: {
    flexDirection: 'row',
  },
  last_mes: {
    marginLeft: 10,
  },
});
