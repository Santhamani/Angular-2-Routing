import { Injectable } from '@angular/core';
import {Book} from './book';
import {BOOKS} from './mock-book';

@Injectable()

export class BookService{

    // getBooks1():Book[] {
    //     return BOOKS;
    // }

    getBooks() : Promise<Book[]> {
        return Promise.resolve(BOOKS);
    }

    getBook(id:number):Promise<Book>{
        return this.getBooks().then(books => books.find(book => book.id === id));
    }

    addBook(book : Book) : void {
        this.getBooks().then(books => {
            let maxIndex = books.length - 1;
            let bookWithMaxIndex = books[maxIndex];
            book.id = bookWithMaxIndex.id + 1;
            books.push(book);
        });
    }

    remove(id : number) : void {
        this.getBooks().then(books => {
            let book = books.find(ob => ob.id === id);
            let bookIndex = books.indexOf(book);
            books.splice(bookIndex, 1);
        });
    }

}