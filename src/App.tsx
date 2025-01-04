import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';

    export default function App() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to Professional Goals!</Text>
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4A90E2',
      },
    });
