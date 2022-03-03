import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { IEmployee } from '../models/employee';


@Component({
  selector: 'app-list-of-employees',
  templateUrl: './list-of-employees.component.html',
  styleUrls: ['./list-of-employees.component.scss']
})
export class ListOfEmployeesComponent implements OnChanges, OnInit, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  @Input('displayList') displayedColumns: Array<string> = [];
  @Input('employeeList') employees: Array<IEmployee> = [];
  @Output() updateEmployee = new EventEmitter<IEmployee>();
  @Output() deleteEmployee = new EventEmitter<number>();

  public count = 0;

  public dialogSub: Subscription = new Subscription;

  constructor(
    private dialog: MatDialog,
  ) {
    console.log('the constructor ');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('the employeees onchanges ', this.employees);
  }

  ngOnInit(): void {
    console.log('the ngOnInit called');
  }

  // ngDoCheck(): void {
  //   this.count = this.count + 1;
  //   console.log('the ngDoCheck called', this.count);
  // }

  ngAfterContentInit(): void {
      console.log('the ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('the ngAfterContentChecked called');
  }


  ngAfterViewInit(): void {
     console.log('the ngAfterViewInit called');
     const ele = document.getElementById('table-first');
     console.log('the ele is ',ele);
  }

  ngAfterViewChecked(): void {
    console.log('the ngAfterViewChecked called')
  }

  public employeeInfo(employee: IEmployee): void {
    this.updateEmployee.emit(employee);
  }

  public deleteEmployeeById(event: MouseEvent, employeeId: number): void {
    event.stopPropagation();
    this.openDialog(employeeId);
  }

  openDialog(employeeId: number) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '300px',
      height: '300px',
      data: employeeId
    });

    this.dialogSub = dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteEmployee.emit(employeeId);
      }
    });
  }

  ngOnDestroy(): void {
    if(this.dialogSub){
      this.dialogSub.unsubscribe();
    }
  }
}
