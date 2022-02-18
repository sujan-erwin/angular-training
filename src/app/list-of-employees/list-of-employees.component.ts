import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEmployee } from '../models/employee';


@Component({
  selector: 'app-list-of-employees',
  templateUrl: './list-of-employees.component.html',
  styleUrls: ['./list-of-employees.component.scss']
})
export class ListOfEmployeesComponent {
  @Input('displayList') displayedColumns: Array<string> = [];
  @Input('employeeList') employees: Array<IEmployee> = [];
  @Output() updateEmployee = new EventEmitter<IEmployee>();

  public employeeInfo(employee: IEmployee){
    this.updateEmployee.emit(employee);
   }
}
