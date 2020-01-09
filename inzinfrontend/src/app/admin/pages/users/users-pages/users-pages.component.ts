import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserModel } from 'src/app/admin/UserModel';

@Component({
  selector: 'app-users-pages',
  templateUrl: './users-pages.component.html',
  styleUrls: ['./users-pages.component.css']
})
export class UsersPagesComponent implements OnInit {

  displayedColumns = ['name','username', 'password'];
  users:UserModel[]=[{username:"hello",password:"Hello",name:"Logan"}];
  dataSource: MatTableDataSource<UserModel>;
  

  @ViewChild(MatPaginator,{"static":false}) paginator: MatPaginator;
  @ViewChild(MatSort,{"static":false}) sort: MatSort;

  constructor() {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

ngOnInit()
{
  this.dataSource = new MatTableDataSource <UserModel>(this.users);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

}
