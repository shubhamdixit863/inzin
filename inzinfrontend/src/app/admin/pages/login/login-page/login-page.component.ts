import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  username:string;
  password:string;
  login()
  {
    console.log("Api called");
   this.authservice.login(this.username,this.password).subscribe(data=>{
     console.log(data);
   })
  }

  ngOnInit() {
  }

}
