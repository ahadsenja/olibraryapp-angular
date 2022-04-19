import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BorrowService } from '../../../services/borrow/borrow.service';
import { Borrow } from '../../../shared/models/borrow/borrow';

@Component({
  selector: 'app-borrow-list',
  templateUrl: './borrow-list.component.html',
  styleUrls: ['./borrow-list.component.scss']
})
export class BorrowListComponent implements OnInit {

  borrows: Borrow[] = [];

  constructor(
    private borrowService: BorrowService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.onGetBorrows();
  }

  onGetBorrows(): void {
    this.borrowService.getAll().subscribe(data => {
      this.borrows = data.data;
      console.log(this.borrows);
    });
  }

  onSelectBorrow(id: number) {
    this.router.navigate(['/borrows/borrow-update', id]);
  }

  onDeleteBorrow(borrow: Borrow) {
    this.borrowService.delete(borrow).subscribe(res => {
      this.borrows = this.borrows.filter(id => id !== borrow);
      alert('WARNING! \n The data you choose will be deleted!');
    });
  }

  onClickDetails(id: number) {
    this.router.navigate(['/transaction-details/transaction-details', id]);
  }

}
