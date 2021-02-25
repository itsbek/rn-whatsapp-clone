import React from 'react';
import { User } from '../../types';
import { View, Text, Image } from 'react-native';
import styles from './style';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export type ContactListProps = {
  user: User;
};

const ContactsItem = (props: ContactListProps) => {
  const { user } = props;

  const navigation = useNavigation();

  const onClick = () => {};

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />

          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text numberOfLines={2} style={styles.status}>
              {user.status}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactsItem;
