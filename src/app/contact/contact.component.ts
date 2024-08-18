import { Component } from '@angular/core';
import { ContactserviceService } from '../Shared/contactservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  constructor(private contactService: ContactserviceService, private router:Router) {
    
  }
  
name:any;
formFilled = false;
  onSubmit(info:any) {
    if (info.name && info.email && info.comment) {
    this.formFilled = true;
    this.contactService.output(info).subscribe((many)=>{this.name=many})
    this.router.navigate(['/submit'])
  }}
}
