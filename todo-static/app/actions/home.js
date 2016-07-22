'use strict';
const dispatcher = thorin.dispatcher;

dispatcher
  .addAction('home.landing')
  .alias('GET', '/')
  .render('home.swig');

dispatcher
  .addAction('home.test')
  .use((intentObj) => {
    intentObj.result({
      hello: 'world'
    }).send();
  });