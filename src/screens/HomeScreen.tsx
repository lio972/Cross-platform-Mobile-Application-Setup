import React from 'react';
    import { StyleSheet, View, Button } from 'react-native';
    import { useDispatch, useSelector } from 'react-redux';
    import { logout } from '../store/features/authSlice';
    import ProgressBar from '../components/ProgressBar';
    import { completeTask } from '../store/features/gamificationSlice';

    export default function HomeScreen() {
      const dispatch = useDispatch();
      const { user } = useSelector((state: RootState) => state.auth);

      const handleCompleteTask = () => {
        dispatch(completeTask('task-1'));
      };

      return (
        <View style={styles.container}>
          <ProgressBar />
          <Button title="Complete Task" onPress={handleCompleteTask} />
          <Button title="Logout" onPress={() => dispatch(logout())} />
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
      },
    });
