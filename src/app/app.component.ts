import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // public displayedColumns: string[] = ['id', 'name', 'age', 'salary', 'country', 'position', 'actions'];
  // public employees: Array<IEmployee> = [];

  // constructor(
  //   private dialog: MatDialog,
  //   private employeeService: EmployeeService
  // ) { }

  // ngOnInit(): void {
  //   this.getListOfEmployees();
  // }

  // getListOfEmployees(isDeleted?: boolean) {
  //   this.employeeService.getListOfEmployees().subscribe(employees => {
  //     this.employees = employees;
  //     if (isDeleted) {
  //       this.employees = this.employees.map((employee, index) => {
  //         employee.id = index + 1;
  //         return employee;
  //       });
  //     }
  //   });
  // }


  // public update(employee: IEmployee): void {
  //   this.openDialog(employee);
  // }

  // public addEmployee() {
  //   this.openDialog();
  // }

  // private openDialog(employee?: IEmployee): void {
  //   const dialogRef = this.dialog.open(AddOrUpdateEmployeeComponent, {
  //     width: '500px',
  //     height: '450px',
  //     data: {
  //       employee: employee,
  //       iscreated: employee ? false : true,
  //       employeeLength: this.employees.length
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       const index = this.employees.findIndex(employee => employee.id === result.id);
  //       if (index > -1) {
  //         this.employeeService.updateEmployeeByIndex(result).subscribe(employee => {
  //           this.getListOfEmployees();
  //         });
  //       } else {
  //         this.employeeService.addEmployee(result).subscribe(employee => {
  //           this.getListOfEmployees();
  //         });
  //       }
  //     }
  //   });
  // }

  // public deleteEmployeeByIndex(employeeIndex: number) {
  //   this.employeeService.deleteEmployeeByIndex(employeeIndex).subscribe(employee => {
  //     this.getListOfEmployees(true);
  //   });
  // }
}
