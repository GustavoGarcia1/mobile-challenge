import { View, Image, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";

import styles from './styles';

export function ModalContent({ user, onCloseModal }) {
  function closeModal() {
    onCloseModal(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <Image style={styles.avatar} source={{ uri: `${user.picture.large}` }} />
          <TouchableOpacity onPress={closeModal} style={styles.icon}>
            <MaterialIcons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 40 }}>
          <View>
            <Text style={styles.text}>{`${user.name.first} ${user.name.last}`}</Text>
            <Text style={styles.text}>{user.email}</Text>
            <Text style={styles.text}>{user.gender}</Text>
            <Text style={styles.text}>{user.dob.date}</Text>
            <Text style={styles.text}>{user.phone}</Text>
            <Text style={styles.text}>{user.nat}</Text>
            <Text style={styles.text}>{`${user.location.street.name} ${user.location.street.number}`}</Text>
            <Text style={styles.text}>{user.id.value}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}