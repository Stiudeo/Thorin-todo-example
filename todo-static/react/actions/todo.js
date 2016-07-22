'use strict';
const tredux = require('tredux');
export const TYPE = {
  FIND: 'todo.find'
};

export function findItems(payload) {
  return {
    type: TYPE.FIND,
    payload
  }
}
tredux.addActions('todo', module.exports);