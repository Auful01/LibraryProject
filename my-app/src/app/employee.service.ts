import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})

export class EmployeeService {

  private baseUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient, private router: Router) { }

  allEmployee(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}

