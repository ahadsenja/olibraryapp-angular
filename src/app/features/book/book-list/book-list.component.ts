import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book/book.service';
import { Book } from '../../../shared/models/book/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.onGetBooks();
  }

  onGetBooks(): void {
    this.bookService.getAll().subscribe(data => {
      this.books = data.data;
    });
  }

}
