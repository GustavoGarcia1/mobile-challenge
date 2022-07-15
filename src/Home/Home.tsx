import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { ModalContent } from '../Modal/ModalContent';
import userApi from '../../api/userApi';

import styles from "./styles";

export function Home() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);


  async function getUsers() {
    await userApi.get('')
      .then(function (response) {
        setUsers(response.data.results);
    
      })
  }
  async function handleLoadingMore() {
    await userApi.get('')
      .then(function (response) {
        setUsers([...users, ...response.data.results]);
      })
  }

  function handleCardClick(item) {
    setSelectedUser(item);
    setShowModal(true);
  }

  function handleCloseModal(closingModal: boolean) {
    if (closingModal) 
      setShowModal(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pacientes</Text>

      <View style={styles.filter}>

        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Searching"
            placeholderTextColor="#fff"
          />
          <MaterialIcons name="person-search" size={24} color="white" style={styles.personSearchIcon} />
        </View>

        <MaterialIcons name="filter-alt" size={35} color="white" style={styles.filterIcon} />
      </View>
      {users.length > 0 && (
        <FlatList
          style={styles.cardContainer}
          data={users}
          keyExtractor={(item) => item.email}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => handleCardClick(item)}>
              <Image style={styles.avatar} source={{ uri: `${item.picture.large}` }} />
              <View style={styles.patientInfo}>
                <Text style={styles.textCard}>{`${item.name.title} ${item.name.last}`}</Text>
                <Text style={styles.textCard}>{item.name.first}</Text>
                <View style={styles.footerCard}>
                  <Text style={styles.textCard}>{item.gender}</Text>
                  <Text style={styles.textCard}>{format(new Date(item.dob.date), "dd'/'MM'/'yyyy", { locale: ptBR })}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          onEndReached={handleLoadingMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            <View
              style={styles.loadingMore}>
              <MaterialIcons name="refresh" size={30} color="black" />
              <Text style={{ fontSize: 25 }}>Loading more...</Text>
            </View>
          }
        />
      )}
      <Modal
        animationType="slide"
        transparent
        visible={showModal}
      >
        {selectedUser && (
          <ModalContent
            user={selectedUser}
            onCloseModal={handleCloseModal}
          />
        )}
      </Modal>
    </View>
  )
}