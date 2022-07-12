import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseUrl = "http://127.0.0.1:8004/api/posts";

  constructor(private http: HttpClient, private router: Router) { }

  allEmployee(): Observable<any> {
    var hasil = this.http.get(this.baseUrl).pipe(map(res => {
      return res['data'];
    }));

    return hasil;

  }

  getEmployee(id: number): Observable<any> {
    var detail = this.http.get(`${this.baseUrl}/${id}`).pipe(map(res => {
      return res['data'];
    }));

    return detail;
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }


  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
