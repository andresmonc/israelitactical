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
    console.log(this.contact.name.length)
    if (this.contact.name.length == 0 || this.contact.email.length == 0 || this.contact.message.length == 0) {
      alert("Please fill out all fields!");
    } else {
      this.http.get(`${this.serverApi}/mailer/?name=${this.contact.name}&email=${this.contact.email}&message=${this.contact.message}`).subscribe(status => alert("Message has been sent!"));
    }
  }

}
