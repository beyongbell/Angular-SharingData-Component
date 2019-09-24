import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-data-parent',
  templateUrl: './data-parent.component.html',
  styleUrls: ['./data-parent.component.css']
})
export class DataParentComponent implements OnInit {

  message;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

}
