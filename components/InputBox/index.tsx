import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const InputBox = () => {
  const [message, setMessage] = useState('');

  const onMicrophonePress = () => {
    console.warn('mic');
  };
  const onSendPress = () => {
    console.warn(`send ${message}`);
    // message to backend

    setMessage('');
  };

  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={setMessage}
          placeholder={'Type a message'}
        />
        <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
        {!message && (
          <Fontisto name="camera" size={24} color="grey" style={styles.icon} />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" color="white" size={24} />
          ) : (
            <MaterialIcons name="send" color="white" size={28} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
