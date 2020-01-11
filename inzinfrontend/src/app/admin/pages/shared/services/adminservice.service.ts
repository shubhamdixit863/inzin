import { environment } from '../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { Observable } from 'rxjs';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }


 // check for email if its already registered

   checkEmail(email:string)
   {
    return this.http.post(`http://${environment.url}:${environment.port}/admin/checkEmail`,{email:email});

   }

   // check for username if its already registered

   checkUsername(username:string)
   {
    return this.http.post(`http://${environment.url}:${environment.port}/admin/checkUsername`,{usernam:username});

   }

  registerUser(username:string,password:string,role:string,isactive:boolean,name:string,email:string)
  {
    
    return this.http.post(`http://${environment.url}:${environment.port}/admin/registeruser`,{username:username,password:password,isactive:isactive,name:name,email:email,role:role});
  
  }
  
  // ge users
  
  getUsers()
  {
    return this.http.post<UserModel[]>(`http://${environment.url}:${environment.port}/admin/getUsers`,{});
  
  }

}
