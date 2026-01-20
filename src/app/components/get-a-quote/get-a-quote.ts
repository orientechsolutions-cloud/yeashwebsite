import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'get-a-quote',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './get-a-quote.html',
  styleUrl: './get-a-quote.scss',
})
export class GetAQuote {
  quoteForm?:FormGroup;
  constructor(private fb : FormBuilder) {
    this.quoteForm = this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',Validators.required],
      message:['',Validators.required]
    });
  }
  onSubmit(){
    if(this.quoteForm?.valid){
      console.log(this.quoteForm.value);
      emailjs
      .send('service_54apxfs', 'template_z598sz9', this.quoteForm.value, {
        publicKey: '15uU6geX-qvTh_v5N',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your quote request has been sent successfully!');
          // Reset the form after successful submission
          this.quoteForm?.reset();
        },
        (err) => {
          console.log('FAILED...', err);
        },
      );
    }
  }
  

}
