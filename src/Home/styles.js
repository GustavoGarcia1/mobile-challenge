import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 50,
    },
    filter: {
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-between',
    },
    searchBarContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    searchBar: {
        flex: 0.9,
        padding: 10,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#ddd',
        marginLeft: 10
    },
    personSearchIcon: {
        marginLeft: -30,
        opacity: 0.5
    },
    filterIcon: {
       marginRight: 15,
       opacity: 0.8
    }
});

export default styles;