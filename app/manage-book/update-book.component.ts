

import { Component, OnInit } from '@angular/core';
import { BookService } from "../book.service";
import { BOOKS } from "../mock-book";
import { Book } from "../book";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { Form } from '@angular/forms';
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  // books : Book[];
  book : Book = new Book();
  constructor(private bookService: BookService,
    private router : Router,
    private route : ActivatedRoute,
    private location : Location) { }

  ngOnInit(): void {
    this.route.params
    .switchMap((params : Params) => this.bookService.getBook(+params['id']))
    .subscribe(book => this.book = book);
  }

goBack() : void {
  this.location.back();
}



}
