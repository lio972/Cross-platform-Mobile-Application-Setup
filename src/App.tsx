import React from 'react';
    import { Provider } from 'react-redux';
    import { store } from './store/store';
    import Navigation from './navigation';
    import { SafeAreaProvider } from 'react-native-safe-area-context';

    export default function App() {
      return (
        <SafeAreaProvider>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </SafeAreaProvider>
      );
    }
