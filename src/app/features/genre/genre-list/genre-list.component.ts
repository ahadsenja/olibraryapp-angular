import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenreService } from '../../../services/genre/genre.service';
import { Genre } from '../../../shared/models/genre/genre';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss']
})
export class GenreListComponent implements OnInit {

  genres: Genre[] = [];
  filterText: string = ''
  pageOfItems: Array<any>;

  constructor(
    private genreService: GenreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetGenres();
  }

  onGetGenres(): void {
    this.genreService.getAll().subscribe(data => {
      this.genres = data.data;
    });
  }

  onSelectGenre(id: number) {
    this.router.navigate(['/genres/genre-update', id]);
  }

  onDeleteGenre(genre: Genre) {
    this.genreService.delete(genre).subscribe(res => {
      this.genres = this.genres.filter(id => id !== genre);
      alert('Warning, the data you choose will be deleted!');
    });
  }

  filterData(filterBy: string): Genre[] {
    if (filterBy) {
      filterBy = filterBy.toLocaleLowerCase();
      return this.genres.filter((genre: Genre) => {
        genre.name.toLocaleLowerCase().indexOf(filterBy) !== -1
      });
    } else {
      return this.genres;
    }
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

}
