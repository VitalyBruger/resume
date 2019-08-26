import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { IDocument } from '../model/document.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ankets-list',
  templateUrl: './ankets-list.component.html',
  styleUrls: ['./ankets-list.component.css']
})
export class AnketsListComponent implements OnInit {

  constructor(private docServ: DocumentService, private router: Router) { }
  documents: any = [];
  public productsPerPage = 1;
  public selectedPage = 1;
  public pageCount = 1;
  filter: any = {
    Document_ID: '',
    Name: '',
    Status: ''
  };
  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    this.docServ.getDocuments().subscribe(
      data => {
        this.documents = data;
        if (this.filter.Status != '') this.documents = this.documents.filter(elem => elem.Status == this.filter.Status);
        if (this.filter.Name != '') this.documents = this.documents.filter(elem => elem.Name.toLowerCase().indexOf(this.filter.Name.toLowerCase()) >= 0);
        if (this.filter.Document_ID != '')
          this.documents = this.documents.filter(elem => elem.Document_ID.toLowerCase().indexOf(this.filter.Document_ID.toLowerCase()) >= 0);
        else
          this.pageCount = Math.ceil(this.documents.length / this.productsPerPage);
        this.documents = this.documents.slice(pageIndex, pageIndex + this.productsPerPage);
      },
      err => {
        if (err.status == 401) { this.router.navigate(['/login']) };
      }
    );
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
    this.getDocuments();
  }

  filterInput() {
    this.getDocuments();
  }

  isFilter() {
    return this.filter.Document_ID.length + this.filter.Name.length + this.filter.Status.length;
  }

  clearFilter() {
    this.filter = {
      Document_ID: '',
      Name: '',
      Status: ''
    };
    this.getDocuments();
  }

}
