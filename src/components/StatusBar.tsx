import React from 'react';
    import { StyleSheet, View } from 'react-native';

    const StatusBar = () => {
      return <View style={styles.statusBar} />;
    };

    const styles = StyleSheet.create({
      statusBar: {
        height: 20,
        backgroundColor: '#4A90E2',
      },
    });

    export default StatusBar;
