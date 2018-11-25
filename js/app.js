(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	const vm = new Vue({
		el: '#app',
		data: {
			editId:-1,
			todoName: '',
			list: [{
					id: 1,
					name: '抽烟',
					done: false
				},
				{
					id: 2,
					name: '喝酒',
					done: true
				},
				{
					id: 3,
					name: '烫头发',
					done: false
				}
			]
		},
		methods: {
			// 点击添加
			addTodo() {
				if (this.todoName.trim() == 0) {
					return;
				}
				const id =
					this.list.length === 0 ? 1 : this.list[this.list.length - 1].id + 1;
				this.list.push({
					id,
					name: this.todoName,
					done: false
				})
				this.todoName = '';
			},
			// 点击删除
			del(index) {
				this.list.splice(index, 1);
			},
			// 双击编辑
			showEdit(id) {
				console.log(id);
				this.editId=id;
			},// 更新
			update(){
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
