import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  // private baseUrl = "http://
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  GetData() {
    return this.http.get(this.apiUrl + 'book');
  }

  GetDataById(id: number) {
    return this.http.get(this.apiUrl + 'book/' + id);
  }

  CreateData(data: any) {
    return this.http.post(this.apiUrl + 'book', data);
  }

  UpdateData(id: number, data: any) {
    return this.http.put(this.apiUrl + 'book/' + id, data);
  }

  DeleteData(id: number) {
    return this.http.delete(this.apiUrl + 'book/' + id);
  }

  PinjamBuku(data: any) {
    return this.http.post(this.apiUrl + 'transactions/pinjam', data);
  }
}
