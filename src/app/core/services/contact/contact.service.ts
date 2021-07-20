import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FireStoreContactRecord } from 'src/core/models';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  createContact(): Observable<FireStoreContactRecord> {}
}
