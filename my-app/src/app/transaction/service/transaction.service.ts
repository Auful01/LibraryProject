import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class transactionsService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl + 'transactions');
  }

  getDataById(id: number) {
    return this.http.get(this.apiUrl + 'transactions/' + id);
  }

  createData(data: any) {
    return this.http.post(this.apiUrl + 'transactions', data);
  }

  updateData(id: number, data: any) {
    return this.http.put(this.apiUrl + 'transactions/' + id, data);
  }

  deleteData(id: number) {
    return this.http.delete(this.apiUrl + 'transactions/' + id);
  }

}
