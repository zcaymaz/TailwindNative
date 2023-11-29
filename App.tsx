/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View className="flex flex-row space-x-5 justify-center bg-yellow-300 h-screen">
      <View>
        <Text className="text-blue-500 text-3xl font-bold">Selam</Text>
      </View>
      <View>
        <Text className="text-blue-500 text-3xl">Selam</Text>
      </View>
    </View>
  );
}

export default App;
