
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { BookService } from './book.service';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data-service';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ManageBookComponent } from './manage-book/manage-book.component';
import { ViewDetailsComponent } from "./book/view-details.component";
import { UpdateBookComponent } from "./manage-book/update-book.component";
import { PageNotFoundComponent } from "./page-not-found.component";

import {routing} from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AddBookComponent,
    ManageBookComponent,
    ViewDetailsComponent,
    PageNotFoundComponent,
    UpdateBookComponent,
    
    
  ], //import SubcomponentComponent ,
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [BookService],
  bootstrap: [AppComponent] //includue SubcomponentComponent 
})
export class AppModule { }
