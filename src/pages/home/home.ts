import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { DetailPage } from "../detail/detail";
import { AddtaskPage } from "../addtask/addtask";
import { TodoProvider } from "../../providers/todo/todo";
import { ItemSliding, ToastController } from 'ionic-angular';

@Component({
	selector: "page-home",
	templateUrl: "home.html"
})
export class HomePage {
	constructor(public navCtrl: NavController, public todoProv: TodoProvider, public toastCtrl: ToastController) {
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
  	this.showDoneToast('bottom')
  	}
 }

  	deleteTask(task) {
  		this.todoProv.deleteTask(task)
  		this.showDeleteToast('bottom')
  	}

  	closeSlide(slidingItem: ItemSliding) {
    	slidingItem.close();
  	}

  	unDoneTask(task) {
  		this.todoProv.unDoneTask(task)
  		this.showUnDoneToast('bottom')
  	}

  	showDeleteToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Task Deleted',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  	showDoneToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Congrats! Task Completed.',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  	showUnDoneToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Task undone :(',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

}
