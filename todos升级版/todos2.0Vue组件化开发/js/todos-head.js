Vue.component('todo-header', {
	template: `<header class="header">
  <h1>todos</h1>
  <input class="new-todo" placeholder="What needs to be done?" @keyup.enter="addTodo" v-model="todoName">
</header>`,
	data() {
		return {
			todoName: ''
		}
	},
	methods: {
		addTodo() {
      if (this.todoName.trim()=='') {
        return;
      }
      this.$emit('add-todo',this.todoName);
      this.todoName='';
		}
	}
})
