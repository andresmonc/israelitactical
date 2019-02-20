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
  public showMessage: boolean = false;
  public showForm: boolean = true;
  public contact: Contact = {
    name: '',
    email: '',
    message: ''
  };
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  private serverApi = this.baseUrl;

  ngOnInit() {

  }



}
