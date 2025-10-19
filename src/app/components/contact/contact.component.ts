import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
  loading = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) return;

  this.loading = true;

  const templateParams = {
    name: this.contactForm.value.name,
    email: this.contactForm.value.email,
    message: this.contactForm.value.message,
  };
  emailjs.send(
    'your_service_id',     
    'your_template_id',    
    templateParams,
    'your_public_key'      
  )
  .then(() => {
    alert('Email sent successfully!');
    this.contactForm.reset();
    this.loading = false;
  })
  .catch((error) => {
    console.error('Email sending failed:', error);
    alert('Failed to send email. Try again later.');
    this.loading = false;
  });

  }
}
