import React from 'react';
import { Platform, StatusBar, View,
  StyleSheet } from 'react-native';
import SignatureScreen from './screens/SignatureScreen';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}

        <SignatureScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    paddingTop: 40
  }
});

export default App;
