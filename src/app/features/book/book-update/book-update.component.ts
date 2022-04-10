import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../../../services/author/author.service';
import { BookService } from '../../../services/book/book.service';
import { CategoryService } from '../../../services/category/category.service';
import { GenreService } from '../../../services/genre/genre.service';
import { PublihserService } from '../../../services/publisher/publihser.service';
import { Author } from '../../../shared/models/author/author';

import { Book } from '../../../shared/models/book/book';
import { Category } from '../../../shared/models/category/category';
import { Genre } from '../../../shared/models/genre/genre';
import { Publihser } from '../../../shared/models/publisher/publihser';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit {

  formGroup = new FormGroup({
    title: new FormControl(''),
    year: new FormControl(0),
    stock: new FormControl(0),
    author_id: new FormControl(0),
    genre_id: new FormControl(0),
    category_id: new FormControl(0),
    publisher_id: new FormControl(0)
  });

  isSubmitted = false;

  book: Book = new Book();

  authors: Author[] = [];
  genres: Genre[] = [];
  categories: Category[] = [];
  publishers: Publihser[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private authorService: AuthorService,
    private genreService: GenreService,
    private categoryService: CategoryService,
    private publisherService: PublihserService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.bookService.getById(id).subscribe((res) => {
      this.formGroup = new FormGroup({
        title: new FormControl(res.data.title),
        year: new FormControl(res.data.year),
        stock: new FormControl(res.data.stock),
        author_id: new FormControl(res.data.author_id),
        genre_id: new FormControl(res.data.genre_id),
        category_id: new FormControl(res.data.category_id),
        publisher_id: new FormControl(res.data.publisher_id)
      });
    });

    this.getAuthor();
    this.getGenre();
    this.getCategory();
    this.getPublisher();
  }

  onUpdateBook() {
    this.book.title = this.formGroup.value.title;
    this.book.year = this.formGroup.value.year;
    this.book.stock = this.formGroup.value.stock;
    this.book.author_id = this.formGroup.value.author_id;
    this.book.genre_id = this.formGroup.value.genre_id;
    this.book.category_id = this.formGroup.value.category_id;
    this.book.publisher_id = this.formGroup.value.publisher_id;

    const id = this.activatedRoute.snapshot.params.id;

    this.bookService.update(id, this.book).subscribe(res => {
      this.isSubmitted = true;
    },
      error => console.log(error)
    );

    this.formGroup.reset();
    this.router.navigate(['/books/books']);
  }

  // SHOW AUTHOR DATA IN SELECT COMPONENT
  getAuthor() {
    this.authorService.getAll().subscribe(res => {
      this.authors = res.data;
    });
  }

  // SHOW GENRE DATA IN SELECT COMPONENT
  getGenre() {
    this.genreService.getAll().subscribe(res => {
      this.genres = res.data;
    });
  }

  // SHOW CATEGORY DATA IN SELECT COMPONENT
  getCategory() {
    this.categoryService.getAll().subscribe(res => {
      this.categories = res.data;
    });
  }

  // SHOW PUBLISHER DATA IN SELECT COMPONENT
  getPublisher() {
    this.publisherService.getAll().subscribe(res => {
      this.publishers = res.data;
    });
  }

  onCancelSubmit(event) {
    event.preventDefault();
    this.router.navigate(['/books/books']);
  }

}
