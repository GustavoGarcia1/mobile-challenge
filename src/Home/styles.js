import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#003461',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 50,
        color: 'white',
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
        color: 'white',
        marginLeft: 10
    },
    personSearchIcon: {
        marginLeft: -30,
        opacity: 0.5
    },
    filterIcon: {
        marginRight: 15,
        opacity: 0.8
    },
    cardContainer: {
        flex: 1
    },
    card: {
        width: width * 0.95,
        marginLeft: 10,
        marginTop: 10,
        flexDirection: "row",
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    textCard: {
        color: '#003461',
    },
    footerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    patientInfo: {
        flex: 1,
        justifyContent: 'space-around',
        marginLeft: 12,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#003461',
        borderWidth: 2,
    },
    loadingMore: { 
        marginBottom: 20, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 10 
    }
});

export default styles;