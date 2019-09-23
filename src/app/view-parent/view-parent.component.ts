import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class ViewParentComponent implements AfterViewInit {

  @ViewChild(ViewChildComponent,  {static: false}) ViewChild;

  constructor() { }

  message = 'This Parent';

  ngAfterViewInit() {
    this.message = this.ViewChild.message;
  }

  receiveMessage($event) {
    this.message = $event;
  }

}
