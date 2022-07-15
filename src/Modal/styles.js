import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    flex: 1,
    marginTop: height * 0.2,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    width: '100%',
    alignItems: 'center'
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: -60,
    borderRadius: 50,
    borderColor: '#003461',
    borderWidth: 2,
  },
  icon: {
    marginTop: -50, 
    alignSelf: 'flex-end'
  },
  text: {
    marginBottom: 5, 
    fontSize: 16
  }
});

export default styles;