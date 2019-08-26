import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IDocument } from './model/document.model';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable()
export class DocumentService {

  constructor(private http: HttpClient) { }
  getDocuments() {
    return this.http.get('/api/documents', { withCredentials: true });
  }

  getDocument(docid: string) {
    return this.http.get('/api/document/' + docid, { withCredentials: true })
  }

  updateDocument(newDoc: any) {
    return this.http.post('/api/update', { newDoc }, { withCredentials: true })
  }
  
}
