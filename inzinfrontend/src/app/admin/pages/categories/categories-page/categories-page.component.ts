import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserModel } from 'src/app/admin/pages/shared/models/UserModel';
import { AdminserviceService } from '../../shared/services/adminservice.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl,FormArray } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {

  displayedColumns = ['name','username', 'password','email','role','isactive'];
  //users:UserModel[]=[{username:"hello",password:"Hello",name:"Logan"}];
  dataSource: MatTableDataSource<UserModel>;
  categoryForm:FormGroup;
  public contactList: FormArray;
  email = new FormControl('', [Validators.required, Validators.email]);
  username=new FormControl('', [Validators.required]);
  password=new FormControl('', [Validators.required]);
  name=new FormControl('', [Validators.required]);
  errors:any={};
  spinner:boolean=false;
 
 
  

  @ViewChild(MatPaginator,{"static":false}) paginator: MatPaginator;
  @ViewChild(MatSort,{"static":false}) sort: MatSort;
  @ViewChild('dialog',{"static":false}) template: TemplateRef<HTMLElement>;
  constructor( private adminservice:AdminserviceService,private _snackBar: MatSnackBar,public dialog: MatDialog,private formBuilder: FormBuilder) {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  // convenience getter for easy access to form fields
get f() { return this.categoryForm.controls; }

openSnackBar(message:string) {
  let config = new MatSnackBarConfig();
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'center';
    config.duration = 2000;
   
  this._snackBar.open(message, 'Close',config);
}
  openDialog(): void {
    const dialogRef = this.dialog.open(this.template, {
      height: '400px',
     width: '600px',
    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  closeDialog(){
    this.dialog.closeAll();
  }

 

  // Submitting the form to register the users

  onSubmit()
  {
     
      this.adminservice.registerUser(this.f.username.value,this.f.password.value,this.f.role.value,this.f.isactive.value,this.f.name.value,this.f.email.value).subscribe(data=>{
        if(data["status"])
        {
          this.openSnackBar(data["message"]);
          this.closeDialog();
          this.getUsers();
        }
        else{
          this.openSnackBar("username or email already registered");
        }
        //console.log(data);
      })  
        
  }

  getUsers()
  {
    this.spinner=true;
    this.adminservice.getUsers().subscribe(data=>{

      this.dataSource = new MatTableDataSource <UserModel>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.spinner=false;

  // console.log(data);

    })
  }


ngOnInit()
{
  this.getUsers();
  this.categoryForm = this.formBuilder.group({
   maincategory:["",Validators.required],
   seo_title:[""],
   seo_heading:[""],
   seo_slug:[""],
   seo_category_Description:[""],
   page_content:[""],
   seo_keyword:[""],
   isParent:[""],
   parentCategory:[""]
   
 });

//

 
}

}
