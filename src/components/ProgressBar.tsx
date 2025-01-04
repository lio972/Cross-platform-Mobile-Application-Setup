import React from 'react';
    import { StyleSheet, View, Text } from 'react-native';
    import { useSelector } from 'react-redux';
    import { RootState } from '../store/store';

    const ProgressBar = () => {
      const { points } = useSelector((state: RootState) => state.gamification);

      return (
        <View style={styles.container}>
          <Text style={styles.pointsText}>Points: {points}</Text>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${(points % 1000) / 10}%` },
              ]}
            />
          </View>
        </View>
      );
    };

    const styles = StyleSheet.create({
      container: {
        padding: 10,
      },
      progressBar: {
        height: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
      },
      progressFill: {
        height: '100%',
        backgroundColor: '#4A90E2',
      },
      pointsText: {
        marginBottom: 5,
        fontWeight: 'bold',
      },
    });

    export default ProgressBar;
