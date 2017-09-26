import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebaritem',
  templateUrl: './sidebaritem.component.html',
  styleUrls: ['./sidebaritem.component.css']
})
export class SidebaritemComponent implements OnInit {
  displayName=""
  link = ""
  constructor() {
    this.displayName="name";
  }

  ngOnInit() {
  }
  setDeisplayName(name){
    this.displayName="name";
  }

}
