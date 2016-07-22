'use strict';
const { TYPE } = require('actions/todo');
const tredux = require('tredux');

const reducer = tredux.reducer('todo', {
  items: []
});

reducer.handle(TYPE.FIND, (state, data) => {
  console.log("Received result:", data);
  return data;
});