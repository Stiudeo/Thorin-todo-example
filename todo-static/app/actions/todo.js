'use strict';
const dispatcher = thorin.dispatcher;


dispatcher
  .addAction('todo.find')
  .use((intentObj) => {
    intentObj.result([]).send();
  });