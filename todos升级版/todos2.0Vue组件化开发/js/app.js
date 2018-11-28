;(function(window) {
	'use strict'

	// Your starting point. Enjoy the ride!
	const vm=new Vue({
		el:'#app',
		data:{
			list:[
				{ id: 1, name: '吃饭', done: false },
				{ id: 2, name: '上课', done: true },
				{ id: 3, name: '学Vue', done: false }
			]
		},
		methods: {
			// 删除
			delTodo(id){
				let index=this.list.findIndex(item=>item.id=id);
				this.list.splice(index,1);
			},
			// 添加
			parentAddTodo(name){
				let id=
				this.list.length==0?1:this.list[this.list.length-1].id+1;
				this.list.push({
					id,
					name,
					done:false
				})
			},
			// 删除
			idClearCompleted(){
				this.list=this.list.filter(item=>!item.done)
			}
		},
		computed: {
			isShowFooter(){
				return this.list.length>0;
			},
			isShowClear(){
				return this.list.some(item=>item.done);
			},
			isShowNumber(){
				return this.list.filter(item=>!item.done).length;
			}
		}
	})
	window.vm=vm;
})(window)
