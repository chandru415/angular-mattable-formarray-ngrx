import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  @Input() gridDataSource: Employee[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
