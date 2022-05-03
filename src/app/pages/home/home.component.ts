import { Component, OnInit } from '@angular/core';
import { FiltersDTO } from 'src/app/models/FiltersDTO';
import notify from "devextreme/ui/notify"
import { HomeService } from './service/home.service';
import { modelResultBooks } from 'src/app/models/modelResultBooks';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formData: FiltersDTO
  dataGrid: modelResultBooks[]
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this._initVariables();
  }

  private _initVariables(): void {
    this.formData = new FiltersDTO();
    this.dataGrid = []
  }
  onFormSutmit(event: any) {
    event.preventDefault();
    const text = this.formData.author.toString();
    this.homeService._getBooks(text).subscribe(response => {
      if (response != null) {
        this.dataGrid = response;
      } else {
        notify(response);
      }

      this.homeService._getAuthors().subscribe(resp => {
        for (let index = 0; index <= this.dataGrid.length; index++) {
          let resulAuthorById = resp.filter(x => x.id == this.dataGrid[index].author);
          this.dataGrid[index].author = resulAuthorById[0].fullName;
        }
      })
      this.homeService._getPublisher().subscribe(res => {
        for (let index = 0; index <= this.dataGrid.length; index++) {
          let resultPublisherById = res.filter(x => x.id == this.dataGrid[index].publisher)
          this.dataGrid[index].publisher = resultPublisherById[0].name;
        }
      })
      this.formData = new FiltersDTO();
    })
  };

}
