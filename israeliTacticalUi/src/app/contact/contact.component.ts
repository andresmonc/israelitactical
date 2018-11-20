import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  public contact: Contact = {
    name: '',
    email: '',
    message: ''
  }
baseUrl = environment.baseUrl;
constructor(private http: HttpClient) { }
  private serverApi = this.baseUrl;

ngOnInit() {
}

onSubmit(form: NgForm) {
  var data = form.value;
  this.http.get(`${this.serverApi}/mailer/?name=${this.contact.name}&email=${this.contact.email}&message=${this.contact.message}`).subscribe(status => console.log(JSON.stringify(status)));
  // this.http.get(`${this.serverApi}/mailer/?name=${contact.name}&email=${contact.email}&message=${contact.message}`).subscribe(status => console.log(JSON.stringify(status)));

  console.log(`${this.serverApi}/mailer/?name=${this.contact.name}&email=${this.contact.email}&message=${this.contact.message}`);
}
}
