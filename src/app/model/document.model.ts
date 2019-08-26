export interface IDocument {
  Document_ID: string;
  Name: string;
  Status: number;
  items: IItem[];
  sections: ISection[];
}

export function CopyDocument(doc: IDocument) {
  return {
    Document_ID: doc.Document_ID,
    Name: doc.Name,
    Status: doc.Status,
    items: doc.items.map(a => Object.assign({}, a)),
    sections: doc.sections.map(a => Object.assign({}, a))
  }
}

export function GetUpdateDocument(olddoc: IDocument, newdoc: IDocument) {
  let res: any[] = [];
  let docupdate: any[] = [];
  if (olddoc.Name != newdoc.Name) docupdate.push({ pole: 'Name', value: newdoc.Name });
  if (olddoc.Status != newdoc.Status) docupdate.push({ pole: 'Status', value: newdoc.Status });
  if (docupdate.length > 0) res.push({ type: 'document', operation: 'update', Document_ID: olddoc.Document_ID, update: docupdate });


  for (var i = 0; i < olddoc.sections.length; i++) {
    docupdate = [];
    if (olddoc.sections[i].Name != newdoc.sections[i].Name)
      docupdate.push({ pole: 'Name', value: newdoc.sections[i].Name });
    if (olddoc.sections[i].ParentSection_ID != newdoc.sections[i].ParentSection_ID)
      docupdate.push({ pole: 'ParentSection_ID', value: newdoc.sections[i].ParentSection_ID });
    if (olddoc.sections[i].Status != newdoc.sections[i].Status)
      docupdate.push({ pole: 'Status', value: newdoc.sections[i].Status });
    if (docupdate.length > 0) res.push({ type: 'section', operation: 'update', Section_ID: olddoc.sections[i].Section_ID, update: docupdate });
  }

  for (var i = 0; i < olddoc.items.length; i++) {
    docupdate = [];
    if (olddoc.items[i].DisplayValue != newdoc.items[i].DisplayValue)
      docupdate.push({ pole: 'DisplayValue', value: newdoc.items[i].DisplayValue });

    if (docupdate.length > 0) res.push({ type: 'item', operation: 'update', Item_ID: olddoc.items[i].Item_ID, update: docupdate });
  }

  for (var i = 0; i < newdoc.sections.length; i++) {
    if (!olddoc.sections.some(function(o2) {
      return o2.Section_ID === newdoc.sections[i].Section_ID;
    }
    )) {
      res.push({ type: 'section', operation: 'insert', section: newdoc.sections[i], Document_ID: olddoc.Document_ID });
    }
  }

  for (var i = 0; i < newdoc.items.length; i++) {
    if (!olddoc.items.some(function(o2) {
      return o2.Item_ID === newdoc.items[i].Item_ID;
    }
    )) {
      res.push({ type: 'item', operation: 'insert', item: newdoc.items[i] });
    }
  }
  return res;
}

export function Getuuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export interface IItem {
  ControlType: number
  DisplayValue: string
  Item_ID: string
  Section_ID: string
  SortOrder: number
  Status: number
  ValueType: number
}

export interface ISection {
  Level: number
  Name: string
  ParentSection_ID: string
  Section_ID: string
  Status: number
}
