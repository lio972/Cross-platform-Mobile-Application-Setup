import React, { useState } from 'react';
    import { StyleSheet, TextInput, Button, View, Text } from 'react-native';
    import { useDispatch } from 'react-redux';
    import { login } from '../store/authSlice';

    const DEFAULT_ACCOUNT = {
      email: 'test@example.com',
      password: 'password123'
    };

    export default function LoginScreen() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const dispatch = useDispatch();

      const handleLogin = () => {
        if (email === DEFAULT_ACCOUNT.email && password === DEFAULT_ACCOUNT.password) {
          dispatch(login({ email, name: 'Test User' }));
        } else {
          alert('Invalid credentials. Use test@example.com / password123');
        }
      };

      return (
        <View style={styles.container}>
          <Text style={styles.title}>Professional Goals</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} />
          <View style={styles.separator} />
          <Button 
            title="Use Default Account" 
            onPress={() => {
              setEmail(DEFAULT_ACCOUNT.email);
              setPassword(DEFAULT_ACCOUNT.password);
              handleLogin();
            }} 
            color="#4A90E2"
          />
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#4A90E2',
      },
      input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
      },
      separator: {
        height: 20,
      },
    });
