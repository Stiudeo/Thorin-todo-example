'use strict';
const fetcher = require('thorin-fetch'),
  tredux = require('tredux'),
  React = require('react'),
  ReactDOM = require('react-dom');


/* Define our API fetcher */
fetcher('api', {
  credentials: true,
  url: 'http://localhost:3000/dispatch'
});
// require our reducers.
require('reducers/index');
const TodoApp = require('pages/TodoApp').default;
ReactDOM.render(tredux.mount(<TodoApp />), document.getElementById('react-app'));
