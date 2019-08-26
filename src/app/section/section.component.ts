import { Component, Input } from '@angular/core';
import { ISection } from '../model/document.model';
import { TemplateRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input() section: ISection;
  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;
  edit: boolean = false;

  constructor() { }

  loadTemplate() {
    if (this.edit) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

}
