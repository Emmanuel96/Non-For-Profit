import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 40,
        backgroundColor: '#ddd', // Placeholder color
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4a90e2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#4a90e2',
        fontSize: 18,
        fontWeight: 'bold',
    },
})