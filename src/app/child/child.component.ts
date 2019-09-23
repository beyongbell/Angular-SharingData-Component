import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() message: string;

  @Output() messageEvent = new EventEmitter<string>();

  messageChild = 'Welcome Child';

  constructor() { }

  ngOnInit() {
  }

  sendMessageEvent() {
    this.messageEvent.emit(this.messageChild);
  }

}
