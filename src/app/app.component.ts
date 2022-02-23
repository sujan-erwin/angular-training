import { Component, OnInit } from '@angular/core';
 import { MatDialog } from '@angular/material/dialog';
import { AddOrUpdateEmployeeComponent } from './add-or-update-employee/add-or-update-employee.component';
import { IEmployee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public displayedColumns: string[] = ['index', 'name', 'age', 'salary', 'country', 'position', 'actions'];
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
    this.openDialog(employee);
  }

  public addEmployee(){
    this.openDialog();
  }

  private openDialog(employee?: IEmployee): void {
    const dialogRef = this.dialog.open(AddOrUpdateEmployeeComponent, {
       width: '500px',
       height: '450px',
       data: {
         employee : employee,
         iscreated: employee ? false: true,
         employeeLength: this.employees.length
        }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log(`Dialog result`, result);
        const index = this.employees.findIndex(employee => employee.index === result.index);
        if(index > -1){
          this.employees[index] = result;
        } else {
           this.employees.push(result);
        }
        this.employees = [...this.employees];
      }
    });
  }

  public deleteEmployeeByIndex(employeeIndex: number){
    this.employees = this.employees.filter(employee => employee.index !== employeeIndex);
    this.employees = this.employees.map((employee, index )=> {
       employee.index = index + 1;
      return employee;
    });

  }
}
