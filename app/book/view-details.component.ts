
import { BOOKS } from '../mock-book';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import 'rxjs/add/operator/switchMap';
import { BookService } from "../book.service";
import { Book } from "../book";

@Component({
    selector:'view-details',
    templateUrl : `./view-details.component.html`
})

export class ViewDetailsComponent implements OnInit {
    book:Book = new Book();
    constructor(
        private bookService : BookService,
        private router : Router,
        private route : ActivatedRoute,
        private location: Location
    ){}

    ngOnInit() : void{
        this.route.params
        .switchMap((params : Params) => this.bookService.getBook(+params['id']))
        .subscribe(book => this.book = book);
    }
    goBack():void{
        this.location.back();
    }
    updateBook(id:number):void{
        this.router.navigate(['/update-book',id]);
    }

}