import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../../services/author/author.service';
import { Author } from '../../../shared/models/author/author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  authors: Author[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.onGetAuthors();
  }

  onGetAuthors(): void {
    this.authorService.getAll().subscribe(data => {
      this.authors = data.data
    })
  }

}
