import { Component, OnInit } from '@angular/core';
import { BookreturnService } from '../../../services/bookreturn/bookreturn.service';
import { Bookreturn } from '../../../shared/models/bookreturn/bookreturn';

@Component({
  selector: 'app-bookreturn-list',
  templateUrl: './bookreturn-list.component.html',
  styleUrls: ['./bookreturn-list.component.scss']
})
export class BookreturnListComponent implements OnInit {

  bookreturns: Bookreturn[] = [];

  constructor(private bookReturnService: BookreturnService) { }

  ngOnInit(): void {
    this.onGetBookReturns();
  }

  onGetBookReturns(): void {
    this.bookReturnService.getAll().subscribe(data => {
      this.bookreturns = data.data;
    });
  }

}
