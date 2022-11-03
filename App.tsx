import { useRef } from 'react'
import {
  Button,
  KeyboardAvoidingView,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

export default function App() {
  const phone = useRef('')

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Phone</Text>
        <TextInput
          style={[styles.text, styles.input]}
          onChangeText={(text) => {
            phone.current = text
          }}
        />
      </View>

      <View style={styles.btn}>
        <Button
          title="Call tel"
          onPress={async () => {
            try {
              await Linking.openURL(`tel:${phone.current}`)
            } catch (e) {
              alert(e.message)
            }
          }}
        />
      </View>

      <View style={styles.btn}>
        <Button
          title="Call telprompt"
          onPress={async () => {
            try {
              await Linking.openURL(`telprompt:${phone.current}`)
            } catch (e) {
              alert(e.message)
            }
          }}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
  },
  row: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    marginVertical: Platform.select({
      android: 10,
    }),
  },
  input: {
    flex: 1,
    borderWidth: 1,
    marginLeft: 10,
    padding: 4,
  },
})
