import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PinjamService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl + 'terpinjam');
  }

  getDataById(id: number) {
    return this.http.get(this.apiUrl + 'terpinjam/' + id);
  }

  kembali(id: number) {
    return this.http.post(this.apiUrl + 'kembali', { 'id': id });
  }

}
