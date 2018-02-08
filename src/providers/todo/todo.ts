import { Injectable } from "@angular/core";

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
	tasks = [
		{
			name: "Eat Lunch",
			location: "Somewhere",
			description: "This is a description",
			done: true
		},

		{
			name: "Do nothing",
			location: "Nowhere",
			description: "Sleep",
			done: false
		},
		{
			name: "Sleep",
			location: "Nowhere",
			description: "Sleep",
			done: false
		},
		{
			name: "Sleep Again",
			location: "Nowhere",
			description: "Sleep",
			done: false
		}
	];
	constructor() {
		console.log("Hello TodoProvider Provider");
	}

	getAll(){
		return this.tasks
	}

	addTask(newTask){
		this.tasks.push(newTask)
	}

	doneTask(task) {
		task.done = true
	}

	deleteTask(task) {
		let current = this.tasks.indexOf(task)
		this.tasks.splice(current, 1)
	}

	unDoneTask(task) {
		task.done = false
	}
}
