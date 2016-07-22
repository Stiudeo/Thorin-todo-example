import React, {Component} from 'react';
import { connect, dispatch, actions } from 'tredux';

const fetcher = require('thorin-fetch');

let apiFetch = fetcher('api');

class TodoApp extends Component {

  componentWillMount() {
    apiFetch(actions.todo.findItems()).then((r) => {
      dispatch(actions.todo.TYPE.FIND, r);
    }).catch((e) => console.log(e));
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        <h1>TODO App</h1>
        <div>

          Hello world
        </div>
      </div>
    )
  }
}

function mapState(state) {
  return {
    todos: state.todo.items
  }
}
export default connect(mapState, TodoApp);