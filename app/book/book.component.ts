import { Component, OnInit } from '@angular/core';
import { Book } from "../book";
import { BOOKS } from "../mock-book";
import { BookService } from "../book.service";
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books : Book[];
  // books;
    constructor(private bookService: BookService){
    }
    getBooks() : void {
      this.bookService.getBooks().then(books => this.books = books );
    }
    
  ngOnInit() {
    this.getBooks();
  }

}
