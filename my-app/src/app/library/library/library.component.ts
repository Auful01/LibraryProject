import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor(private libraryServ: LibraryService, private modal: NgbModal) { }

  listBook: any;
  thisBook: any;
  bookId: any;
  mode: string = 'add';

  formPinjam: {
    id: number,
    user_id: number,
    // status : 0,
    day: number,
  }

  listDay: any;
  ngOnInit(): void {
    this.getData();
    this.listDay = [
      { id: 1, day: '1 Hari' },
      { id: 2, day: '2 Hari' },
      { id: 3, day: '3 Hari' },
    ]
    this.thisBook = {
      id: 0
    }

    this.formPinjam = {
      id: 0,
      user_id: 1,
      day: 1
    }
  }


  getData() {
    return this.libraryServ.GetData().subscribe(
      data => {
        console.log(data);
        this.listBook = data['data'];
      }
    )

  }

  log(data) {
    console.log(data);
  }

  getById(id: number) {
    return this.libraryServ.GetDataById(id).subscribe(
      data => {
        this.thisBook = data['data'];
        console.log(data);
      }
    )
  }


  emptyForm() {
    this.mode = 'add';
    this.formPinjam = {
      id: 0,
      user_id: 1,
      day: 1
    }

    if (this.bookId > 0) {
      // this.mode = 'edit';
      this.getById(this.bookId);
    }
  }

  open(content, id) {
    this.getById(id)
    this.modal.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  save() {

    this.libraryServ.PinjamBuku(this.thisBook).subscribe(
      data => {
        console.log(data);
        this.getData();
      }
    )

  }
}
