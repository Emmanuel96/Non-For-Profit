import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    grantButton: {
        width: '80%',
        paddingVertical: 15,
        backgroundColor: '#5BC0DE', // Light blue color
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    expenseButton: {
        width: '80%',
        paddingVertical: 15,
        backgroundColor: '#8BC34A', // Green color
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    balanceButton: {
        width: '80%',
        paddingVertical: 15,
        backgroundColor: '#AED581', // Light green color
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    noteContainer: {
        width: '80%',
        padding: 15,
        backgroundColor: '#FFF9C4', // Light yellow background
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    noteText: {
        color: '#333',
        fontSize: 14,
        textAlign: 'center',
    },
})