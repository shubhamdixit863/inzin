import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import {  MatSnackBar,MatSnackBarConfig } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import decode from 'jwt-decode';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authservice:AuthService,private _snackBar: MatSnackBar, private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router,) { }

  loginForm: FormGroup;
  openSnackBar(message:string) {
    let config = new MatSnackBarConfig();
      config.verticalPosition = 'top';
      config.horizontalPosition = 'center';
      config.duration = 2000;
     
    this._snackBar.open(message, 'Close',config);
  }
// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

onSubmit()
{
  //this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      //console.log(this.f.username.value,this.f.password.value);
      this.authservice.login(this.f.username.value,this.f.password.value).subscribe(data=>{
        console.log(data);
        if(data.token && data.status)
        {  
          // checking if the token is present
          // saving the token inside  localstorage
          localStorage.setItem('currentUser', JSON.stringify(data.user));
          localStorage.setItem('token', JSON.stringify(data.token));
          localStorage.setItem('role', JSON.stringify(data.role));
       
          
          const tokenPayload = decode(data.token);
          console.log("payload"+JSON.stringify(tokenPayload));
        

            this.router.navigate(['/admin/dashboard']);
          

        }
        else{
          this.openSnackBar("Please Provide Valid Credentials");
        }

      })



      
}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
  });

  // Removing every thing from localstorage if this page gets opened

  localStorage.removeItem('token');
  localStorage.removeItem('currentUser');


  }
  }


