import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import ContactItem from '../components/ContactsItem';
import users from '../data/Users';
import { FlatList } from 'react-native-gesture-handler';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={users}
        renderItem={({ item }) => <ContactItem user={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
