import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {
   private Url = 'http://localhost:3000/api';



  constructor(private http: HttpClient) { }

  val(){
    return this.http.get(this.Url)
    
  }

  output(info:string){
    return this.http.post(this.Url,info)
  }
}
