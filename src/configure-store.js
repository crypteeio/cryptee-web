import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

const configureStore = (history: History) => {
    // If devTools is installed, connect to it
    const devToolsExtension = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__
    const createStoreWithMiddleware = compose(
        applyMiddleware(
            routerMiddleware(history)),
        devToolsExtension ? devToolsExtension() : f => f
    )(createStore);

    const store = createStoreWithMiddleware(rootReducer)
    return store;
}


const rootReducer = combineReducers({
    form: formReducer,
    routing: routerReducer
})
  
//   let devTools;
//   if (process.env.NODE_ENV === 'development') {
//     devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   }
  
//   const store = createStore(rootReducer, devTools)
export default configureStore