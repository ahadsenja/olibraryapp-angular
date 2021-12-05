import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category/category.service';
import { Category } from '../../../shared/models/category/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.onGetCategories();
  }

  onGetCategories(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data.data;
    });
  }

}
