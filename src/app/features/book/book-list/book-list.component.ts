import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from '../../../services/book/book.service';
import { Book } from '../../../shared/models/book/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  searchTerm: string = '';
  totalItems: number = 0;
  totalPages: number = 0;
  currentPage: number = 0;

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetBooks();
  }

  onGetBooks(): void {
    this.bookService.getAll().subscribe(data => {
      this.books = data[0].books;
      console.log(this.books);
      this.totalItems = data[0].totalItems;
      this.totalPages = data[0].totalPages;
      this.currentPage = data[0].currentPage;
    });
  }

  onSelectBook(id: number) {
    this.router.navigate(['/books/book-update', id]);
  }

  onDeleteBook(book: Book) {
    this.bookService.delete(book).subscribe(res => {
      this.books = this.books.filter(id => id !== book);
      alert('WARNING! \n The data you choose will be deleted!');
    });
  }

}
