import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, ScrollView} from 'react-native';
import phoneCall from 'react-native-immediate-phone-call';

const App = () => {
  const [phone, setPhone] = useState('');

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <TextInput
        showSoftInputOnFocus
        placeholder="Phone"
        placeholderTextColor="#888"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
      <Button
        title="Call"
        onPress={() => {
          phoneCall.immediatePhoneCall(phone);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',

    padding: 20,
  },
  input: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#888',

    fontSize: 16,
    color: '#000',
  },
});

export default App;
