import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import {IconButton, MD3Colors} from 'react-native-paper';
const DATA = [
  {
    id: '1',
    // img: '../assets/img/ava.jpg',
    imgUri:
      'https://i.pinimg.com/736x/4f/cd/17/4fcd174faa214bb424c0be4a234895d1.jpg',
    nameUser: 'Dinh Nguyet Quynh',
    phoneNumber: '0399762636',
  },
  {
    id: '2',
    imgUri:
      'https://i.pinimg.com/736x/4f/cd/17/4fcd174faa214bb424c0be4a234895d1.jpg',
    nameUser: 'Tuấn Cường',
    phoneNumber: '0399762636',
  },
];
const Item = ({imgUri, nameUser, phoneNumber}) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.message}>
          <View style={styles.img_and_mes}>
            <Image source={{uri: imgUri}} style={styles.imgAva} />
            <View style={styles.last_mes}>
              <Text style={styles.name}>{nameUser}</Text>
              <Text>{phoneNumber}</Text>
            </View>
          </View>
          <View style={styles.iconBtn}>
            <IconButton icon="phone" size={24} />
            <IconButton icon="video-outline" size={24} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default function ListFriends({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.textHead}>List Friend</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Root', {screen: 'AddFriend'})}>
          <Image source={require('../assets/img/Vector.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.search}>
        <TextInput placeholder="Search" />
      </View>
      <View style={styles.countFriend}>
        <Text style={{fontWeight: 'bold'}}>Tất cả 95</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item
            imgUri={item.imgUri}
            nameUser={item.nameUser}
            phoneNumber={item.phoneNumber}
          />
        )}
        keyExtractor={item => item.id}
      />
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
    backgroundColor: '#f5f5f5',
    margin: 8,
    borderRadius: 12,
  },
  img_and_mes: {
    flexDirection: 'row',
  },
  imgAva: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  last_mes: {
    marginLeft: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  iconBtn: {
    flexDirection: 'row',
  },
  countFriend: {
    width: 80,
    padding: 10,
    backgroundColor: '#615EF00F',
    borderRadius: 12,
    margin: 8,
  },
});
