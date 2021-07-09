import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Category {}

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private url = 'http://127.0.0.1:8000/categories/';
  constructor(private _http: HttpClient) {}

  getCategories() {
    return this._http.get<Array<Category>>(this.url);
  }

  createCategory(category: Category) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post<Category>(this.url, JSON.stringify(category), {
      headers: myHeaders,
    });
  }

  updateCategory(category: Category) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put<Category>(this.url, JSON.stringify(category), {
      headers: myHeaders,
    });
  }

  deleteCategory(id: string) {
    return this._http.delete<Category>(this.url + '/' + id);
  }
}
