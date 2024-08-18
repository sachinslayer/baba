import { Component } from '@angular/core';
import { ContactserviceService } from '../Shared/contactservice.service';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent {
  user:any;
  constructor(private contactService: ContactserviceService,){
    contactService.val().subscribe((data)=>{this.user=data;console.log(data);})
  }
  

}
