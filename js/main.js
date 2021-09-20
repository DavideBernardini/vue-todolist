const app = new Vue({
    el: '#root',
    data: {
        image: {
            'url': 'img/logo.png',
            'name': 'boolean-logo'
        },
        todos: [
            'Fare i compiti',
            'Fare la spesa',
            'Fare il bucato'
        ]
    },
    methods: {
        addTodo: function() {
            if (this.newTodo != '') {
                this.todos.push(this.newTodo.charAt(0).toUpperCase() + this.newTodo.slice(1));
                this.newTodo = '';
            }
        },
        removeTodo: function(todoIndex) {
            this.todos.splice(todoIndex, 1)
        }
    }
})