import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { GenreService } from '../../../services/genre/genre.service';
import { Genre } from '../../../shared/models/genre/genre';

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.component.html',
  styleUrls: ['./genre-create.component.scss']
})
export class GenreCreateComponent implements OnInit {

  formGroup = new FormGroup({});
  isSubmitted = false;

  genres: Genre[] = [];
  genre: Genre = new Genre();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private genreService: GenreService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [''],
      description: ['']
    });
  }

  onCreateGenre() {
    this.genre.name = this.formGroup.value.name;
    this.genre.description = this.formGroup.value.description;

    this.genreService.create(this.genre).subscribe(res => {
      this.isSubmitted = true;
    },
      error => console.log(error)
    );

    this.formGroup.reset();
    this.router.navigate(['/genres/genres']);
  }

  onCancelSubmit(event) {
    event.preventDefault();
    this.router.navigate(['/genres/genres']);
  }

}
