import { Component } from '@angular/core';
import { MyPipe } from './my-pipe.pipe';

//retrieve an array for dog names
//in the view, the array strings are capitalized by the pipe capitalizeWords

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'List of dogs (with pipe)';
    animals:Array<string>;

    constructor() {
        this.animals = ['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky', 'jack russel terrier', 'boxer', 'chow chow', 'pug', 'akita', 'corgi', 'labrador'];
    }
}
