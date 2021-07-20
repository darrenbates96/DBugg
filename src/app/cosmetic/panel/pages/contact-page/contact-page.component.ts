import { Component, OnInit } from '@angular/core';
import { ContactClass } from 'src/app/core/classes';
import { FireStoreContactRecord } from 'src/app/core/models';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  contact: FireStoreContactRecord = new ContactClass();

  constructor() {}

  ngOnInit(): void {}
}
