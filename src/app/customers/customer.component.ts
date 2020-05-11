import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';

import { Customer } from './customer';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer = new Customer();
  customerForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.customerForm=new FormGroup({
      firstName:new FormControl(),
      lastName:new FormControl(),
      email:new FormControl(),
      sendCatalogue:new FormControl((true)),
    });
  }
  onTestValue(){ //setValue & patchValue
    this.customerForm.patchValue({
      firstName:'ons',
      
      email:'ons@getMaxListeners.com',
      sendCatalogue:false
    })
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
}
