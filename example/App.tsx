import { StyleSheet, Text, View } from 'react-native';

import * as EmbedCommModule from '@wavemaker/expo-native-module';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{EmbedCommModule.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
