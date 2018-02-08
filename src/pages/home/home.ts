import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { DetailPage } from "../detail/detail";
import { AddtaskPage } from "../addtask/addtask";
import { TodoProvider } from "../../providers/todo/todo";
import { ItemSliding } from 'ionic-angular';

@Component({
	selector: "page-home",
	templateUrl: "home.html"
})
export class HomePage {
	constructor(public navCtrl: NavController, public todoProv: TodoProvider) {
		this.tasks = this.todoProv.getAll();
	}

	openDetail(task) {
		this.navCtrl.push(DetailPage, { task : task });
	}

	openTaskPage() {
		this.navCtrl.push(AddtaskPage)
	}

  	doneTask(task, slidingItem) {
  	if (task.done == false) {
  	this.todoProv.doneTask(task)
  	this.closeSlide(slidingItem)
  	}
 }

  	deleteTask(task) {
  		this.todoProv.deleteTask(task)
  	}

  	closeSlide(slidingItem: ItemSliding) {
    	slidingItem.close();
  	}

  	unDoneTask(task) {
  		this.todoProv.unDoneTask(task)
  	}
}
