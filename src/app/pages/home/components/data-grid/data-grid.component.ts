import { Component, Input, OnInit } from '@angular/core';
import { modelResultBooks } from 'src/app/models/modelResultBooks';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  @Input()gridResult: modelResultBooks[];
  constructor() {
    this.gridResult = []
  }

  ngOnInit(): void {

  }
  

}
