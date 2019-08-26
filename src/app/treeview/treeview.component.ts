import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, HostListener, ElementRef } from '@angular/core';
import { ISection, Getuuidv4 } from '../model/document.model';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})

export class TreeviewComponent {
  @Input() sections: ISection[];
  @Input() topSections: string;
  @Output() changeActiveSection = new EventEmitter<string>();

  expand: {} = {};

  dragStart: string = '';
  dragEnd: string = '';
  dragging: boolean = false;
  selectedSection: string = null;
  top: string = '-100px';
  left: string = '-100px';

  constructor(private ref: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.sections.currentValue) {
      if (changes.sections.currentValue.length > 0) {
        this.sections.forEach(sec => this.expand[sec.Section_ID] = true);
      }
      this.selectedSection = this.sections[0].Section_ID;
    }
  }

  sectionClick(secid) {
    this.changeActiveSection.emit(secid);
    this.selectedSection = secid;
  }

  onExpand(li: HTMLLIElement, secid) {
    this.expand[secid] = !this.expand[secid];
    this.changeActiveSection.emit(secid);
  }

  isExpanden(li: HTMLLIElement) {
    return li.classList.contains('expanded');
  }

  getChilds(parent) {
    if (this.sections)
      return this.sections.filter(sec => sec.ParentSection_ID == parent);
  }

  getChildsStr(parent) {
    if (this.sections)
      return this.sections
        .filter(sec => sec.ParentSection_ID == parent)
        .map(sec => sec.Section_ID)
  }

  getSelectedName() {
    if (this.sections)
      return this.sections.filter(sec => sec.Section_ID == this.selectedSection)[0].Name;
  }

  hasChilds(parent) {
    if (this.sections.filter(sec => sec.ParentSection_ID == parent).length > 0) return true;
    return false;
  }

  treeMousedown(dragingElement) {
    this.dragStart = dragingElement;
    this.dragging = true;
    this.selectedSection = dragingElement;
  }

  treeMouseup(dragingElement) {
    if (!this.dragging) return;
    this.dragEnd = dragingElement;
    this.dragging = false;
    this.top = '-100px';
    this.left = '-100px';

    if (this.dragStart == this.dragEnd)
      this.changeActiveSection.emit(dragingElement);
    else
      if (this.dragStart != '' && this.dragEnd != '') {
        for (let i = 0; i < this.sections.length; i++) {
          if (this.sections[i].Section_ID == this.dragStart) {
            if (this.sections[i].ParentSection_ID != this.dragEnd) {
              if (!this.isParent([this.dragStart], [this.dragEnd]))
                this.sections[i].ParentSection_ID = this.dragEnd;
            }
            break;
          }
        }
      }
  }

  isParent(parentID: string[], childID) {
    let children: string[] = [];
    for (var i = 0; i < parentID.length; i++) {
      children = children.concat(this.getChildsStr(parentID[i]));
    }

    if (children.filter(sec => sec == childID).length > 0) return true;
    else
      if (children.length > 0) return this.isParent(children, childID);
      else return false;
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    let elem = this.ref.nativeElement.getBoundingClientRect();
    if (this.dragging) {
      this.top = String(event.pageY - 30) + 'px';
      this.left = String(event.pageX + 20) + 'px';
      if (event.clientY < elem.y + 25 || event.clientY > elem.y + elem.height - 25 ||
        event.pageX < elem.x + 5 || event.pageX > elem.x + elem.width - 5) {
        this.top = '-100px';
        this.left = '-100px';
        this.dragging = false;
      }
    }
  }

  addSection() {
    this.sections.push({
      Section_ID: Getuuidv4(),
      ParentSection_ID: null,
      Name: 'New Section',
      Status: 2,
      Level: 0
    });
  }

}
