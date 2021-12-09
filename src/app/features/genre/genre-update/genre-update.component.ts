import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreService } from '../../../services/genre/genre.service';
import { Genre } from '../../../shared/models/genre/genre';

@Component({
  selector: 'app-genre-update',
  templateUrl: './genre-update.component.html',
  styleUrls: ['./genre-update.component.scss']
})
export class GenreUpdateComponent implements OnInit {

  formGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });

  isSubmitted = false;

  genre: Genre = new Genre();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private genreService: GenreService
  ) { }

  ngOnInit(): void {
    // get data from url parameter
    const id = this.activatedRoute.snapshot.params.id;

    // set data into form
    this.genreService.getById(id).subscribe((res) => {
      this.formGroup = new FormGroup({
        name: new FormControl(res.data.name),
        description: new FormControl(res.data.description)
      });
    });
  }

  onUpdateGenre() {
    this.genre.name = this.formGroup.value.name;
    this.genre.description = this.formGroup.value.description;

    const id = this.activatedRoute.snapshot.params.id;

    this.genreService.update(id, this.genre).subscribe(res => {
      this.isSubmitted = true;
    },
      error => console.log(error)
    );

    this.formGroup.reset();
    this.router.navigate(['/genres/genres']);
  }

}
