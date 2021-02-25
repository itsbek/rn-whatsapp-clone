import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import chatRoomData from '../data/Chats';
import ChatMessage from '../components/ChatMessage';
import InputBox from '../components/InputBox';
import bg from '../assets/bg.png';

const ChatRoom = () => {
  const route = useRoute();
  //   console.log(route.params);

  return (
    <ImageBackground source={bg} style={{ width: '100%', height: '100%' }}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
      <InputBox />
    </ImageBackground>
  );
};

export default ChatRoom;
