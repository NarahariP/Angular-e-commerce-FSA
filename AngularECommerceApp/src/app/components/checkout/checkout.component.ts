import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkoutFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
      }),
      shippingAddress: this.formBuilder.group({
        street: '',
        landmark: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
      }),
      billingAddress: this.formBuilder.group({
        street: '',
        landmark: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
      }),
      cardInfo: this.formBuilder.group({
        cardType: '',
        nameOnCard: '',
        cardNumber: '',
        cvv: '',
        expiryMonth: '',
        expiryYear: '',
      }),
    });
  }

  copyShippingAddressToBillingAddress(event) {
    console.log('ok');

    if (event.target.checked) {
      this.checkoutFormGroup.controls.billingAddress.setValue(
        this.checkoutFormGroup.controls.shippingAddress.value
      );
    } else {
      this.checkoutFormGroup.controls.billingAddress.reset();
    }
  }

  onSubmit() {
    console.log(this.checkoutFormGroup.get('customer').value);
  }
}
