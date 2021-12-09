import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../../../services/author/author.service';
import { Author } from '../../../shared/models/author/author';

@Component({
  selector: 'app-author-update',
  templateUrl: './author-update.component.html',
  styleUrls: ['./author-update.component.scss']
})
export class AuthorUpdateComponent implements OnInit {

  formGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    born_date: new FormControl(null),
    born_place: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl('')
  });

  isSubmitted = false;

  author: Author = new Author();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authorService: AuthorService
  ) { }

  ngOnInit(): void {
    // Get data from url parameter
    const id = this.activatedRoute.snapshot.params.id;

    // Set the data into form
    this.authorService.getById(id).subscribe((res) => {
      this.formGroup = new FormGroup({
        name: new FormControl(res.data.name),
        email: new FormControl(res.data.email),
        born_date: new FormControl(res.data.born_date),
        born_place: new FormControl(res.data.born_place),
        city: new FormControl(res.data.city),
        address: new FormControl(res.data.address)
      });
    });
  }

  // UPDATE AUTHOR
  onUpdateAuthor() {
    this.author.name = this.formGroup.value.name;
    this.author.email = this.formGroup.value.email;
    this.author.born_date = this.formGroup.value.born_date;
    this.author.born_place = this.formGroup.value.born_place;
    this.author.city = this.formGroup.value.city;
    this.author.address = this.formGroup.value.address;

    const id = this.activatedRoute.snapshot.params.id;

    this.authorService.update(id, this.author).subscribe(res => {
      this.isSubmitted = true;
      this.formGroup.reset();
      this.router.navigate(['/authors/authors']);
    },
      error => console.log(error)
    );
  }

}
