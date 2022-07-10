import { View, Text, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pacientes</Text>

      <View style={styles.filter}>

        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Searching"
          />
          <MaterialIcons name="person-search" size={24} color="black" style={styles.personSearchIcon}/>
        </View>

        <MaterialIcons name="filter-alt" size={35} color="black" style={styles.filterIcon}/>
      </View>
    </View>
  )
}