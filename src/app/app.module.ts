import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SidebaritemComponent } from './layout/sidebar/sidebaritem/sidebaritem.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Component } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { TestComponent } from './test/test.component';
import { AlertModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PanelComponent } from './panel/panel.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    SidebaritemComponent,
    TestComponent,
    PanelComponent,
    MainComponent,
    
  ],
  imports: [
    BrowserModule,BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  
