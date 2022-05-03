import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
//devextreme
import { DevextremeModule } from "../../components/devextreme/devextreme.module";
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes =[{
  path:'',
  component:HomeComponent
  
}]

@NgModule({
  declarations: [
    HomeComponent,
    DataGridComponent
  ],
  imports: [
    DevextremeModule,
    CommonModule,  
    ComponentsModule,  
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
