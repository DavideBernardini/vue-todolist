const app = new Vue({
    el: '#root',
    data: {
        image: {
            'url': 'img/logo.png',
            'name': 'boolean-logo'
        },
        todos: [
            {
                'task': 'Fare i compiti',
                'checked': false
            },
            {
                'task': 'Fare la spesa',
                'checked': false
            },
            {
                'task': 'Fare il bucato',
                'checked': false
            },
            {
                'task': 'Fare la doccia',
                'checked': false
            }
        ],
        newTodo: '',
    },
    methods: {
        addTodo: function() {
            if (this.newTodo != '') {
                this.todos.push({
                    'task': this.newTodo.charAt(0).toUpperCase() + this.newTodo.slice(1),
                    'checked': false
                });
                this.newTodo = '';
            }
        },
        removeTodo: function(todoIndex) {
            this.todos.splice(todoIndex, 1)
        },
        done: function(checked) {
            if (checked == true) {
                return 'done';
            }
        }
    }
})