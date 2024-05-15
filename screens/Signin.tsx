import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Signin = () => {
  return (
    <View>
      <View>
        <Text style={styless.text}>SIGN IN</Text>
      </View>
      <View style={styless.formSignup}>
        <View>
          <TextInput placeholder="Số điện thoại" style={styless.input} />
          <TextInput placeholder="Mật khẩu" style={styless.input} />
        </View>
      </View>
      <View style={styless.btnSubmit}>
        <Button title="ĐĂNG NHẬP" color="#aedb3e" />
      </View>
      <Text style={styless.textFooter}>Already have Account? Login</Text>
    </View>
  );
};
const styless = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 150,
  },
  formSignup: {
    width: 382,
    height: 353,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 70,
  },
  input: {
    height: 50,
    marginBottom: 50,
  },
  textSmall: {
    textAlign: 'center',
    marginTop: 70,
    marginBottom: 70,
  },
  btnSubmit: {
    width: 350,
    height: 50,
    alignSelf: 'center',
    borderRadius: 50,
    fontSize: 30,
  },
  textFooter: {
    marginTop: 30,
    alignSelf: 'center',
  },
});

export default Signin;
