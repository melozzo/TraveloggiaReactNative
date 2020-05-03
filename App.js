import React from 'react';
import RootNavigation from './components/RootNavigation';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import mapReducer from './redux-store/reducers/map-reducer';
import {Provider } from 'react-redux'
import siteReducer from './redux-store/reducers/site-reducer';
import ReduxThunk from 'redux-thunk'


function App() {
      const rootReducer = combineReducers({
            map: mapReducer,
            site: siteReducer,
      })
      const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

      return (
            <Provider store = { store }>
                  <RootNavigation />
            </Provider>
            
            )


      }
export default App;



