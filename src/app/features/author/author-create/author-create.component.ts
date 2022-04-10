import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthorService } from '../../../services/author/author.service';
import { Author } from '../../../shared/models/author/author';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.scss']
})
export class AuthorCreateComponent implements OnInit {

  formGroup = new FormGroup({});
  isSubmitted = false;

  authors: Author[] = [];
  author: Author = new Author();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authorService: AuthorService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [''],
      email: [''],
      born_date: [null],
      born_place: [''],
      city: [''],
      address: ['']
    });
  }

  onCreateAuthor() {
    this.author.name = this.formGroup.value.name;
    this.author.email = this.formGroup.value.email;
    this.author.born_date = this.formGroup.value.born_date;
    this.author.born_place = this.formGroup.value.born_place;
    this.author.city = this.formGroup.value.city;
    this.author.address = this.formGroup.value.address;

    this.authorService.create(this.author).subscribe(res => {
      this.isSubmitted = true;
      console.log('Auhtors created: ', res);
    });

    this.formGroup.reset();
    this.router.navigate(['/authors/authors']);
  }

  onCancelSubmit(event) {
    event.preventDefault();
    this.router.navigate(['/authors/authors']);
  }

}
