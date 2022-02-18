import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOrUpdateEmployeeComponent } from './add-or-update-employee/add-or-update-employee.component';
import { IEmployee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public displayedColumns: string[] = ['index', 'name', 'age', 'salary', 'country', 'position'];
  public employees: Array<IEmployee> = [];

  constructor(
    private dialog: MatDialog,
  ){

  }

  ngOnInit(): void {
    this.addEmployeeData();
  }

  public addEmployeeData(): void {
    this.employees = [
      {
        index: 1,
        name: 'chandra sekhar',
        age: 32,
        salary: 200000,
        country: 'india',
        position: 'senior manager',
      },
      {
        index: 2,
        name: 'sai kumar',
        age: 32,
        salary: 200000,
        country: 'USA',
        position: 'senior manager',
      }];
  }

  public update(employee: IEmployee): void{
    console.log(employee);
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddOrUpdateEmployeeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
