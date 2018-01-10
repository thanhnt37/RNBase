import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as ToDoListActions from '../actions/todolists';
import ToDoListComponent from '../components/to-do-lists/Main';

class ToDoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {state, actions} = this.props;

        return (
            <ToDoListComponent {...actions} items={state.default.toDolists.data} />
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ToDoListActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);