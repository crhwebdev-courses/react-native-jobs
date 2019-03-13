import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
);

//sets up store to watch for changes to specific pieces of state
// autoRehydrate (set up in createStore call above) watches redux for changes
// to state and issues REHYDRATE action type with a payload taken from AsyncStorage
// NOTE: add .purge() to end of persistStore call to purge persisted data from application
persistStore(store, { storage: AsyncStorage, whitelist: ['likedJobs'] });

export default store;
