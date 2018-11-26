(function (window) {
	'use strict';

	Vue.directive('focus',{
		inserted(el){
			el.focus();
		},
		update(el, binding) {
			// 为了提升性能，我们判断一下，只有 当前项 为编辑状态的时候，才让当前项的文本框
			// 获得焦点
			
			// console.log(el,binding);
			
			if (binding.value) {
				// console.log('update', binding.value)
				el.focus()
			}
		}
	})
	// const list =JSON.parse(localStorage.getItem('todos'));
	// Your starting point. Enjoy the ride!
	const vm = new Vue({
		el: '#app',
		data: {
			editId:-1,
			todoName: '',
			list:[]
		},
		created () {
			// axios请求
			// this.list=JSON.parse(localStorage.getItem('todos'));
			axios.get('http://localhost:3000/todos').then(res=>{
				// console.log(res);
				this.list=res.data;
			})
		},
		watch:{
			list:{
				deep:true,
				handler(newVal){
					// console.log(newVal);
					localStorage.setItem('todos',JSON.stringify(newVal));
				}
			}
		},
		methods: {
			// 点击添加
			addTodo() {
				if (this.todoName.trim() == 0) {
					return;
				}
				// const id =
				// 	this.list.length === 0 ? 1 : this.list[this.list.length - 1].id + 1;
				const todo={
					name:this.todoName,
					done:false
				}
				axios.post('http://localhost:3000/todos',todo).then(res=>{
					this.list.push(res.data);
				})

				// this.list.push({
				// 	// id,
				// 	name: this.todoName,
				// 	done: false
				// })
				this.todoName = '';
			},
			// 点击删除
			del(id) {

				
				axios.delete(`http://localhost:3000/todos/${id}`).then(res=>{
					const index=this.list.findIndex(item=>item.id===id)
					this.list.splice(index, 1);
				})
				// console.log(id);
				
			},
			// 双击编辑
			showEdit(id) {
				// console.log(id);
				this.editId=id;

			},// 更新
			update(){
				const todo=this.list.find(item=>item.id==this.editId)
				axios.patch(`http://localhost:3000/todos/${this.editId}`,{name:todo.name})
				.then(res=>{})
			this.editId=-1;				
			},
			isClear(){
				this.list= this.list.filter(item=>!item.done);
			}
		
		},
		computed:{
			isShowFooter(){
				return this.list.length>0;
			},
			isShowCompleted(){
				// console.log(this.list.some(item=>item.done));
				
				return this.list.some(item=>item.done);
			},
			leftName(){
				return this.list.filter(item=>item.done).length;
			}
		}
		

	})

	window.vm = vm;
})(window);
