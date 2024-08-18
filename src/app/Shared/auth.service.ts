import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  signup(signupData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/SignUp`, signupData);
  }

  login(loginData: any): Observable<any> {
    return this.getSignupData(loginData.email).pipe(
      switchMap((signupData: any) => {
        if (signupData) {
          // Populate the login form fields with the retrieved signup data
          loginData.email = signupData.email;
          // You can populate other fields as well if needed
        }
        // Make the login request
        return this.http.post(`${this.apiUrl}/Login`, loginData);
      })
    );
  }

  public getSignupData(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/SignupData?email=${email}`);
  }
  }
