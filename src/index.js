import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, /* applyMiddleware */} from 'redux';
// import {createLogger} from 'redux-logger';
import {Provider} from 'react-redux';

import rootReducer from './reducers';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// const logger = createLogger();

// const notifyAddTodo = store => next => action => {

//     return next(action);
// }

const store = createStore(
    rootReducer/*, applyMiddleware(logger, notifyAddTodo)*/,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    
    document.getElementById('root')
);


registerServiceWorker();
