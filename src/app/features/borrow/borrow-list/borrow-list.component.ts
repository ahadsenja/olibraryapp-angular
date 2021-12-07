import { Component, OnInit } from '@angular/core';
import { BorrowService } from '../../../services/borrow/borrow.service';
import { Borrow } from '../../../shared/models/borrow/borrow';

@Component({
  selector: 'app-borrow-list',
  templateUrl: './borrow-list.component.html',
  styleUrls: ['./borrow-list.component.scss']
})
export class BorrowListComponent implements OnInit {

  borrows: Borrow[] = [];

  constructor(private borrowService: BorrowService) { }

  ngOnInit(): void {
    this.onGetBorrows();
  }

  onGetBorrows(): void {
    this.borrowService.getAll().subscribe(data => {
      this.borrows = data.data;
      console.log(this.borrows);
    });
  }

}
