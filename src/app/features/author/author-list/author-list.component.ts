import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../../../services/author/author.service';
import { Author } from '../../../shared/models/author/author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  authors: Author[] = [];
  filterText: string = '';

  constructor(
    private authorService: AuthorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetAuthors();
  }

  onGetAuthors(): void {
    this.authorService.getAll().subscribe(data => {
      this.authors = data.data
    })
  }

  onSelectAuthor(id: number) {
    this.router.navigate(['/authors/author-update', id])
  }

  onDeleteAuthor(author: Author) {
    this.authorService.delete(author).subscribe(res => {
      this.authors = this.authors.filter(id => id !== author);
      alert('The data you choose will be deleted!');
    });
  }

  onSearchValueChanges(inputElement: HTMLInputElement) { }

}
