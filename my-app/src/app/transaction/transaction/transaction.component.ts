import { Component, OnInit } from '@angular/core';
import { transactionsService } from '../service/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(private trServ: transactionsService) { }
  listTr: any;
  ngOnInit(): void {
    this.getTransaction();
  }

  getTransaction() {
    return this.trServ.getData().subscribe(
      data => {
        console.log(data);
        this.listTr = data['data'];
      }
    )
  }
}
