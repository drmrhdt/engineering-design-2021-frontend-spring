import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories;

  constructor(private _categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this._categoriesService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  clear(table: Table) {
    table.clear();
  }
}
