import { Component, OnInit } from '@angular/core';
import { BookService } from "../book.service";
import { BOOKS } from "../mock-book";
import { Book } from "../book";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.css']
})
export class ManageBookComponent implements OnInit {
  books : Book[];
  book : Book = new Book();
  
  constructor(private bookService: BookService,
              private router : Router,
              private route : ActivatedRoute,
              private location : Location) { }

  getBooks() : void  {
    this.bookService.getBooks().then(books => this.books = books);
  }

  ngOnInit() {
     this.getBooks();
  }

  remove(id : number){
    this.bookService.remove(id);
  }

  updateBook(id:number):void{
    this.router.navigate(['/update-book',id]);
}

}
