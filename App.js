import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux'
import * as reducers from './src/reducers/index';

import ToDoLists from './src/containers/ToDoList';

let reducer = combineReducers(reducers);
let store = createStore(reducer);

class Application extends Component {
    render() {
        return (
            <Provider store={store}>
                <ToDoLists />
            </Provider>
        );
    }
}

export default Application;
