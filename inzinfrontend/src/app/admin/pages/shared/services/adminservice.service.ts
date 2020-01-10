import { environment } from '../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }


  registerUser(username,password)
  {
    return this.http.post(`http://${environment.url}:${environment.port}/dl/registeruser`,{username:username,password:password});
  
  }
  
  // ge users
  
  getUsers(dl)
  {
    return this.http.post(`http://${environment.url}:${environment.port}/dl/getUser`,{});
  
  }

}
