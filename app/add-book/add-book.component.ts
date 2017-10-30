import { Component, OnInit } from '@angular/core';
import { Book } from "../book";
import { BOOKS } from "../mock-book";
import { BookService } from "../book.service";
import { Route, Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  books = BOOKS;
  book : Book = new Book();

  constructor(private bookService:BookService, private router:Router)
   { }

   getBooks():void{
    this.bookService.getBooks().then(books => (books => this.books = books));
   }
  ngOnInit() {
      this.getBooks();
    }
  
  addBook():void{
    this.bookService.addBook(this.book);
    this.router.navigate(['/book']);
  }
}
