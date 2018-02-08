import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo'

/**
 * Generated class for the AddtaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtask',
  templateUrl: 'addtask.html',
})
export class AddtaskPage {

	newTask = {
		name: "",
		location: "",
		description: "",
		done: false,
	}

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoProv: TodoProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtaskPage');
  }

  addTask() {
  	if (this.newTask.name != "") {
  	this.todoProv.addTask(this.newTask)
  	this.navCtrl.pop();
  	this.showAddToast('bottom')
  	}

  	else {
  		this.showNoTaskToast('top')
  	}

  }

  showAddToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Task added!',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  showNoTaskToast(position: string) {
  	  let toast = this.toastCtrl.create({
      message: "You can't add an empty task! *facepalm*",
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }
 }

