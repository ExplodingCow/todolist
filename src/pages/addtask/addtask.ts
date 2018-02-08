import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoProv: TodoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtaskPage');
  }

  addTask() {
  	if (this.newTask.name != "") {
  	this.todoProv.addTask(this.newTask)
  	this.navCtrl.pop();
  	}

  }

}
