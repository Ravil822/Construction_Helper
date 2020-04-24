{ /*import { ConnectionService } from './connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export className AppComponent {

    contactForm: FormGroup;
    disabledSubmitButton: boolean = true;
    optionsSelect: Array<any>;

    @HostListener('input') oninput() {

        if (this.contactForm.valid) {
            this.disabledSubmitButton = false;
        }
    }

    constructor(private fb: FormBuilder, private connectionService: ConnectionService) {

        this.contactForm = fb.group({
            'contactFormName': ['', Validators.required],
            'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
            'contactFormSubjects': ['', Validators.required],
            'contactFormMessage': ['', Validators.required],
            'contactFormCopy': [''],
        });
    }

    onSubmit() {
        this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
            alert('Your message has been sent.');
            this.contactForm.reset();
            this.disabledSubmitButton = true;
        }, error => {
            console.log('Error', error);
        });
    }

}


<form className="text-center border border-light p-5" [formGroup]="contactForm" (ngSubmit)="onSubmit()">

  <p className="h4 mb-4">Contact us</p>

  
  <input type="text" formControlName="contactFormName" id="defaultContactFormName" mdbInput
    className="form-control mb-4" placeholder="Name">

 
  <input type="email" formControlName="contactFormEmail" id="defaultContactFormEmail" mdbInput
    className="form-control mb-4" placeholder="E-mail">

  
  <label>Subject</label>
  <select formControlName="contactFormSubjects" className="browser-default custom-select mb-4">
    <option value="" disabled>Choose option</option>
    <option value="1" selected>Feedback</option>
    <option value="2">Report a bug</option>
    <option value="3">Feature request</option>
    <option value="4">Feature request</option>
  </select>

 
  <div className="form-group">
    <textarea formControlName="contactFormMessage" className="form-control rounded-0" mdbInput id="exampleFormControlTextarea2"
      rows="3" placeholder="Message"></textarea>
  </div>


  <mdb-checkbox [default]="true" className="mb-4">Send me a copy of this message</mdb-checkbox>


  <button mdbBtn color="info" outline="true" block="true" className="z-depth-0 my-4 waves-effect"
    mdbWavesEffect type="submit" [disabled]="disabledSubmitButton">Send</button>
