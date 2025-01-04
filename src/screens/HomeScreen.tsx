import React from 'react';
    import { StyleSheet, Text, View, Button } from 'react-native';
    import { useDispatch } from 'react-redux';
    import { logout } from '../store/authSlice';

    export default function HomeScreen() {
      const dispatch = useDispatch();

      return (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to Professional Goals!</Text>
          <Button title="Logout" onPress={() => dispatch(logout())} />
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#4A90E2',
      },
    });
