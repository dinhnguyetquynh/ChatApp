import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

export default function AddFriend() {
  return (
    <View>
      <View style={styles.head}>
        <Text style={styles.textHead}>Add Friends</Text>
      </View>
      <View style={styles.search}>
        <TextInput placeholder="Search" />
      </View>
      {/* <View style={styles.message}>
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
    </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
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
});
