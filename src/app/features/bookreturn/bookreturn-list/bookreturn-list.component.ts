import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookreturnService } from '../../../services/bookreturn/bookreturn.service';
import { Bookreturn } from '../../../shared/models/bookreturn/bookreturn';

@Component({
  selector: 'app-bookreturn-list',
  templateUrl: './bookreturn-list.component.html',
  styleUrls: ['./bookreturn-list.component.scss']
})
export class BookreturnListComponent implements OnInit {

  bookreturns: Bookreturn[] = [];

  constructor(
    private bookReturnService: BookreturnService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetBookReturns();
  }

  onGetBookReturns(): void {
    this.bookReturnService.getAll().subscribe(data => {
      this.bookreturns = data.data;
    });
  }

  onSelectBookreturn(id: number) {
    this.router.navigate(['/bookreturns/bookreturn-update', id]);
  }

  onDeleteBookreturn(bookreturn: Bookreturn) {
    this.bookReturnService.delete(bookreturn).subscribe(res => {
      this.bookreturns = this.bookreturns.filter(id => id !== bookreturn);
      alert('WARNING!! \n The data you choose will be deleted!');
    });
  }

}
