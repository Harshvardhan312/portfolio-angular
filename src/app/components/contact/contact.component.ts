import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from 'src/environments/environment';


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


    const serviceID = environment.emailServiceID;
    const templateID = environment.emailTemplateID;
    const userID = environment.emailPublicKey;
    
    

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
