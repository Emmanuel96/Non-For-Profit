import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { styles } from 'pages/auth/style';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation()
    return (<View style={styles.container} >
        <Image
            style={styles.logo}
            source={{ uri: 'https://via.placeholder.com/150' }
            }
        />
        < TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#666"
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#666"
            secureTextEntry={true}
            returnKeyType="done"
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")}>
            <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>
    </View>);
}
