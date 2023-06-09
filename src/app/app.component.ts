import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngIntro';
  message: string = 'Message From Typescript Component File';
  imgUrl: string = 'https://img.wattpad.com/4c34b7beae6a7e61099507b82ec20b48ec1fc3c0/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f76717a4a484a377965304d534d513d3d2d32352e313435616631376331666235343964373937333134343831323531352e6a7067?s=fit&w=720&h=720';
  bool: boolean = true;
  userName: string = "";
  buttonClick() {
    console.log('Button Click Event Worked');
  }
  onKeyup() {
    console.log(this.userName);
  }
  postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];

  objArray: Array<any> = [
   /* { id: 1, postTitle: 'Post 1'},
    { id: 2, postTitle: 'Post 2'},
    { id: 3, postTitle: 'Post 3'},
    { id: 4, postTitle: 'Post 4'},
    { id: 5, postTitle: 'Post 5'},*/
  ]

  constructor() {
    for (let i = 0; i < this.postArray.length; i++) {
      console.log(this.postArray[i]);
    }
  }

  addNew() {
    this.objArray.push({ id: 6, postTitle: 'Post 6' });
  }

  onDelete(i: any) {
   // let index = this.objArray.indexOf(post);
    this.objArray.splice(i, 1);
  }
}
