import { Component, Input } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { IItem, Getuuidv4 } from '../model/document.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() items: IItem[];
  @Input() allItems: IItem[];
  @Input() activeSection: string;
  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  edit: boolean = false;

  constructor() { }

  loadTemplate() {
    return (this.edit) ? this.editTemplate : this.readOnlyTemplate;
  }

  addItem() {
    this.allItems.push({
      Item_ID: Getuuidv4(),
      Section_ID: this.activeSection,
      ControlType: 0,
      DisplayValue: 'New item',
      SortOrder: 0,
      Status: 2,
      ValueType: 0
    });
  }
}
