import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { services } from '../service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  addSaleForm: FormGroup;
  message: string;
  updateSaleForm: FormGroup;
  data: any;
  product: any;
  customer: any;
  city: any;
  unitprice: any;
  quentity: any;
  total: any;

  constructor(private services: services, private fb: FormBuilder) {
    this.addSaleForm = fb.group({
      product: new FormControl("", Validators.required),
      customer: new FormControl("", Validators.required),
      quentity: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      unitprice: new FormControl("", Validators.required),
    });

    this.updateSaleForm = fb.group({
      id: new FormControl("", Validators.required),
      product: new FormControl("", Validators.required),
      customer: new FormControl("", Validators.required),
      quentity: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      unitprice: new FormControl("", Validators.required),
      total: new FormControl("", Validators.required),
    });
  }

  ngOnInit(): void {
  }

  addSale() {

    let quentity = this.addSaleForm.controls['customer'].value;
    let unitprice = this.addSaleForm.controls['product'].value;
    let totalp = quentity * unitprice;

    const sendObject = {
      product: this.addSaleForm.controls['product'].value,
      customer: this.addSaleForm.controls['customer'].value,
      city: this.addSaleForm.controls['product'].value,
      quentity: quentity,
      unitprice: unitprice,
      total: totalp
    }
    this.services.addSale(sendObject).subscribe((response) => {
      if (response.status === 200) {
        this.message = 'record uploaded successfully';

      } else {
        this.message = 'record not uploaded successfully';

      }
    }
    );
  }

  findSale() {

    let id = this.updateSaleForm.controls['id'].value;

    this.services.findSale(id).subscribe((response) => {

      if (response) {

        console.log(response.product)
        this.product = response.product
        this.customer = response.customer;
        this.city = response.city;
        this.quentity = response.quentity;
        this.unitprice = response.unitprice;
        this.total = this.quentity * this.unitprice;

      } else {

      }
    }
    );
  }

  updateSale() {


    let id = this.updateSaleForm.controls['id'].value;

    const sendObject = {
      product: this.updateSaleForm.controls['product'].value,
      customer: this.updateSaleForm.controls['customer'].value,
      city: this.updateSaleForm.controls['city'].value,
      quentity: this.updateSaleForm.controls['quentity'].value,
      unitprice: this.updateSaleForm.controls['unitprice'].value,
      total: this.updateSaleForm.controls['total'].value
    }
    this.services.updateSale(sendObject, id).subscribe((response) => {
      if (response.status === 200) {
        this.message = 'record updated successfully';
        console.log(this.message);
      } else {
        this.message = 'record not updated successfully';
        console.log(this.message);
      }
    }
    );
  }
}
