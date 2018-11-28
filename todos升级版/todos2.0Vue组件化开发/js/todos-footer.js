Vue.component('todo-footer',{
  template:`
  <footer class="footer" v-show='isShowFooter'>
				<span class="todo-count"><strong>{{isShowNumber}}</strong> item left</span>
				<!-- Remove this if you don't implement routing -->
				<ul class="filters">
					<li>
						<a class="selected" href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				<!-- Hidden if no completed items are left ↓ -->
				<button class="clear-completed" @click="clearCompleted" v-show="isShowClear">Clear completed</button>
			</footer>
	`,
	props: ['isShowFooter','isShowClear','isShowNumber'],
	methods: {
		clearCompleted(){
			this.$emit('clear-completed')
		}
	}
})