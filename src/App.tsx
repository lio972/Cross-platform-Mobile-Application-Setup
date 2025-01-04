import React from 'react';
    import { Provider } from 'react-redux';
    import { store } from './store/store';
    import Navigation from './navigation';

    export default function App() {
      return (
        <Provider store={store}>
          <Navigation />
        </Provider>
      );
    }
