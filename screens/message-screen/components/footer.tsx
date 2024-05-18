import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MessageFooter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <MaterialIcons name="attach-file" size={36} color={'#000'} />
      </TouchableOpacity>
      <View style={styles.inputMess}>
        <View>
          <TextInput
            placeholder="Nhập tin nhắn ..."
            style={styles.textInput}
            multiline
          />
        </View>
        <TouchableOpacity>
          <FeatherIcon name="send" size={32} color={'#0162C4'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputMess: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    maxWidth: '90%',
    backgroundColor: '#F3F3F3',
    marginBottom: 8,
    borderRadius: 20,
    borderColor: '#D8D8D8',
    borderWidth: 2,
    margin: 8,
    paddingHorizontal: 8,
  },
  textInput: {
    borderRadius: 12,
    backgroundColor: '#F3F3F3',
    width: 280,
    height: 'auto',
    maxWidth: '95%',
  },
});
export default MessageFooter;
