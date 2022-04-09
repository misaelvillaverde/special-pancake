import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          <Text style={{color: '#FDAF75'}}>Cigoto</Text>
          <Text style={{color: '#F24A72'}}>gram</Text>
        </Text>
        <View style={styles.rowFlex}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://c.tenor.com/Jt3axMyxa7QAAAAC/random-wierd.gif',
            }}
          />
          <Text style={styles.titleText}>Welcome</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>USER</Text>
          <TextInput style={styles.input} placeholder="USER" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>PASS</Text>
          <TextInput style={styles.input} placeholder="PASS" />
        </View>
        <View style={styles.inputContainer}>
          <Button title="LOGIN" color="#F24A72" />
          <Button title="FORGET" color="#FDAF75" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  rowFlex: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  inputContainer: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: '55%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  label: {
    marginRight: 10,
  },
});

export default App;
