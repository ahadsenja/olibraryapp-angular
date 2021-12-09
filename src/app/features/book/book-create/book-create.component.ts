import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  formGroup = new FormGroup({});
  isSubmitted = false;

  books: Book[] = [];
  book: Book = new Book();

  authors: Author[] = [];
  genres: Genre[] = [];
  categories: Category[] = [];
  publishers: Publihser[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private bookService: BookService,
    private authorService: AuthorService,
    private genreService: GenreService,
    private categoryService: CategoryService,
    private publisherService: PublihserService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: [''],
      year: [0],
      stock: [0],
      author_id: [0],
      genre_id: [0],
      category_id: [0],
      publisher_id: [0]
    });

    this.getAuthor();
    this.getGenre();
    this.getCategory();
    this.getPublisher();
  }

  onCreateBook() {
    this.book.title = this.formGroup.value.title;
    this.book.year = this.formGroup.value.year;
    this.book.stock = this.formGroup.value.stock;
    this.book.author_id = this.formGroup.value.author_id;
    this.book.genre_id = this.formGroup.value.genre_id;
    this.book.category_id = this.formGroup.value.category_id;
    this.book.publisher_id = this.formGroup.value.publisher_id;
  }

  getAuthor() {
    this.authorService.getAll().subscribe(res => {
      this.authors = res.data;
    });
  }

  getGenre() {
    this.genreService.getAll().subscribe(res => {
      this.genres = res.data;
    });
  }

  getCategory() {
    this.categoryService.getAll().subscribe(res => {
      this.categories = res.data;
    });
  }

  getPublisher() {
    this.publisherService.getAll().subscribe(res => {
      this.publishers = res.data;
    });
  }

}
