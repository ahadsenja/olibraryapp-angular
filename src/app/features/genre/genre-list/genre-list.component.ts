import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../../services/genre/genre.service';
import { Genre } from '../../../shared/models/genre/genre';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss']
})
export class GenreListComponent implements OnInit {

  genres: Genre[] = [];

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.onGetGenres();
  }

  onGetGenres(): void {
    this.genreService.getAll().subscribe(data => {
      this.genres = data.data;
    });
  }

}
