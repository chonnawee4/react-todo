var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos)); //JSON.stringify cast array to string
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos); //JSON.parse cast string to array
    } catch(e) {

    }

    return $.isArray(todos) ? todos : [];
  }
};
