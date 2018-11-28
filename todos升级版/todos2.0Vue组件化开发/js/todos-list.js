Vue.component('todo-list',{
  template:`
  <section class="main">
  <input id="toggle-all" class="toggle-all" type="checkbox">
  <label for="toggle-all">Mark all as complete</label>
  <ul class="todo-list">
    <li :class="{completed:item.done}" v-for="item in todos">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.done">
        <label>{{item.name}}</label>
        <button class="destroy" @click="delTodo(item.id)"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
    </li>
  </ul>
</section>
  `,
  props: ['todos'],
  methods:{
    delTodo(id){
      this.$emit('del-todo',id);
    }
  }
    
})