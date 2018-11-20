import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; 
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  baseUrl = environment.baseUrl;
  constructor(private http: Http) { }
  private serverApi = this.baseUrl;

  ngOnInit() {
  }
  onSubmit(contact: Contact) {
    this.http.get(`${this.serverApi}/mailer/?name=${contact.name}&email=${contact.email}&message=${contact.message}`).subscribe(status => console.log(JSON.stringify(status)));
    // console.log(`${this.serverApi}/mailer/?name=${contact.name}&email=${contact.email}&message=${contact.message}`);
  }
}
