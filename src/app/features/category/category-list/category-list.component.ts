import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from '../../../services/category/category.service';
import { Category } from '../../../shared/models/category/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  filterText: string = '';

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetCategories();
  }

  onGetCategories(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data.data;
    });
  }

  onSelectCategory(id: number) {
    this.router.navigate(['/categories/category-update', id]);
  }

  onDeleteCategory(category: Category) {
    this.categoryService.delete(category).subscribe(res => {
      this.categories = this.categories.filter(id => id !== category);
      alert('WARNING! \n The data you choose will be deleted');
    });
  }
}
