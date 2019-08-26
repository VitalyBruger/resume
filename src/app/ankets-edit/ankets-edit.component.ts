import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../document.service';
import { IDocument, ISection, IItem, CopyDocument, GetUpdateDocument, Getuuidv4 } from '../model/document.model';
import { Router } from '@angular/router';
import { TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ankets-edit',
  templateUrl: './ankets-edit.component.html',
  styleUrls: ['./ankets-edit.component.css']
})
export class AnketsEditComponent implements OnInit {
  document_id: string;
  document: IDocument;
  oldDocument: IDocument;
  activeSection: string = '';
  edit: boolean = false;
  showSaveModal = false;
  modalMessage = "Документ збережено";
  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  constructor(private route: ActivatedRoute, private docServ: DocumentService, private router: Router) { }

  ngOnInit() {
    this.document_id = this.route.snapshot.params.id
    this.loadDocument();
  }

  loadDocument() {
    this.docServ.getDocument(this.document_id).subscribe((data: IDocument) => {
      this.document = data;
      this.oldDocument = CopyDocument(this.document);
      this.activeSection = this.document.sections[0].Section_ID;
    },
      err => {
        console.log('error', err);
        if (err.status == 401) { this.router.navigate(['/login']) };
      }
    );
  }

  getItems() {
    if (this.document)
      return this.document.items.filter(item => item.Section_ID == this.activeSection)
    return [];
  }

  getActiveSection() {
    if (this.document)
      return this.document.sections.filter(sec => sec.Section_ID == this.activeSection)[0];
    return null;
  }

  copyActiveSection() {
    let aS: ISection;
    let aSI: IItem[];
    if (this.document) {
      aS = this.document.sections.filter(sec => sec.Section_ID == this.activeSection)[0];
      aSI = this.document.items.filter(item => item.Section_ID == this.activeSection);
      let newID = Getuuidv4();
      this.document.sections.push({
        Section_ID: newID,
        ParentSection_ID: aS.ParentSection_ID,
        Name: aS.Name,
        Status: aS.Status,
        Level: aS.Level
      });
      for (var i = 0; i < aSI.length; i++)
        this.document.items.push({
          Item_ID: Getuuidv4(),
          Section_ID: newID,
          ControlType: aSI[i].ControlType,
          DisplayValue: aSI[i].DisplayValue,
          SortOrder: aSI[i].SortOrder,
          Status: aSI[i].Status,
          ValueType: aSI[i].ValueType
        });
    }
  }

  changeActiveSection(newActiveSection: string) {
    this.activeSection = newActiveSection;
  }

  saveDocument() {
    this.docServ.updateDocument(GetUpdateDocument(this.oldDocument, this.document))
      .subscribe((data) => {
        this.modalMessage = "Документ збережено";
        this.showSaveModal = true;
      },
        err => {
          if (err.status == 401) { this.router.navigate(['/login']) };
          this.modalMessage = err.error;
          this.showSaveModal = true;
        });
  }

  canselDocument() {
    this.loadDocument();
  }

  loadTemplate() {
    if (this.edit) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

}
