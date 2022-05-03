import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user : any
  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private _location: Location

  ) { 
   this.user = JSON.parse(localStorage.getItem('usuario'))
  }

  ngOnInit(): void {    
  }
  
}
