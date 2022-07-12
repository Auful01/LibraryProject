import { Component, OnInit } from '@angular/core';
import { PinjamService } from '../service/pinjam.service';

@Component({
  selector: 'app-pinjam',
  templateUrl: './pinjam.component.html',
  styleUrls: ['./pinjam.component.scss']
})
export class PinjamComponent implements OnInit {

  listPinjam: any;
  constructor(private pinjamServ: PinjamService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    return this.pinjamServ.getData().subscribe(
      data => {
        this.listPinjam = data['data'];
        console.log(data);
      }
    )
  }

  kembali(id) {
    this.pinjamServ.kembali(id).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
