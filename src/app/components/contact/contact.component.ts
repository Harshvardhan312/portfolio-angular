import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    message: ''
  };

  success = false;

  sendEmail(contactForm: NgForm) {
    const serviceID = 'service_lfsdp3f';
    const templateID = 'template_j20ry9r';
    const userID = 'AlxNMjdn4bhu4Mqbn';

    const templateParams = {
      from_name: this.form.name,
      from_email: this.form.email,
      message: this.form.message
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        this.success = true;
        // Reset form model and state:
        this.form = { name: '', email: '', message: '' };
        contactForm.resetForm();
      }, (error) => {
        console.error('FAILED...', error);
      });
  }
}
